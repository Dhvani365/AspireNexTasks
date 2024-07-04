const axios = require('axios');
const cheerio = require('cheerio');
const { extractPrice, extractCurrency, extractDescription } = require('./util'); // Adjust the path as needed

async function scrapeAmazonProduct(url) {
  if (!url) return;

  // BrightData proxy configuration
  const username = process.env.BRIGHT_DATA_USERNAME;
  const password = process.env.BRIGHT_DATA_PASSWORD;
  const port = 22225;
  const session_id = (1000000 * Math.random()) | 0;

  const options = {
    auth: {
      username: `${username}-session-${session_id}`,
      password,
    },
    host: 'brd.superproxy.io',
    port,
    rejectUnauthorized: false,
  };

  try {
    const response = await axios.get(url, options);
    const $ = cheerio.load(response.data);

    const title = $('#productTitle').text().trim();
    const currentPrice = extractPrice(
      $('.priceToPay span.a-price-whole'),
      $('.a.size.base.a-color-price'),
      $('.a-button-selected .a-color-base')
    );

    const originalPrice = extractPrice(
      $('#priceblock_ourprice'),
      $('.a-price.a-text-price span.a-offscreen'),
      $('#listPrice'),
      $('#priceblock_dealprice'),
      $('.a-size-base.a-color-price')
    );

    const outOfStock = $('#availability span').text().trim().toLowerCase() === 'currently unavailable';
    const images = $('#imgBlkFront').attr('data-a-dynamic-image') || $('#landingImage').attr('data-a-dynamic-image') || '{}';
    const imageUrls = Object.keys(JSON.parse(images));
    console.log(imageUrls)
    const currency = extractCurrency($('.a-price-symbol'));
    const discountRate = $('.savingsPercentage').text().replace(/[-%]/g, "");
    const description = extractDescription($);

    // Extracting ratings
    const rating = parseFloat($('#acrPopover').attr('title').match(/([0-9.]+) out of 5 stars/)[1]);
    const reviewsCount = parseInt($('#acrCustomerReviewText').text().replace(/[^0-9]/g, ''));

    // Extracting additional product details
    const productDetails = {};
    $('#productDetails_techSpec_section_1 tr').each((index, element) => {
      const key = $(element).find('th').text().trim();
      const value = $(element).find('td').text().trim();
      productDetails[key] = value;
    });

    // Assigning specific product details to variables
    const brand = productDetails['Brand'] || '';
    const operatingSystem = productDetails['Operating System'] || '';
    const ramSize = productDetails['RAM'] || '';
    const cpuModel = productDetails['Processor Type'] || '';
    const memoryStorageCapacity = productDetails['Hard Drive Size'] || '';

    const data = {
      url,
      currency: currency || '$',
      imageUrls: imageUrls,
      title,
      currentPrice: Number(currentPrice) || Number(originalPrice),
      originalPrice: Number(originalPrice) || Number(currentPrice),
      priceHistory: [],
      discountRate: Number(discountRate),
      category: 'category',
      reviewsCount: reviewsCount || 0,
      stars: rating || 0,
      isOutOfStock: outOfStock,
      description,
      lowestPrice: Number(currentPrice) || Number(originalPrice),
      highestPrice: Number(originalPrice) || Number(currentPrice),
      averagePrice: Number(currentPrice) || Number(originalPrice),
      brand,
      operatingSystem,
      ramSize,
      cpuModel,
      memoryStorageCapacity,
    };

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}


module.exports = { scrapeAmazonProduct };
