function extractPrice(...elements) {
    for (const element of elements) {
      const priceText = element.text().trim();
      if (priceText) {
        const cleanPrice = priceText.replace(/[^\d.]/g, '');
        let firstPrice;
        if (cleanPrice) {
          firstPrice = cleanPrice.match(/\d+\.\d{2}/)?.[0];
        }
        return firstPrice || cleanPrice;
      }
    }
    return '';
  }
  
  function extractCurrency(element) {
    const currencyText = element.text().trim().slice(0, 1);
    return currencyText || "";
  }
  
  function extractDescription($) {
    const selectors = [".a-unordered-list .a-list-item", ".a-expander-content p", ".a-normal tbody tr td span"];
    for (const selector of selectors) {
      const elements = $(selector);
      if (elements.length > 0) {
        return elements.map((_, el) => $(el).text().trim()).get().join("\n");
      }
    }
    return "";
  }
  // Custom function to extract the description dynamically
// function extractDescription($) {
//   let description = '';
//   $('#feature-bullets ul li span.a-list-item').each((index, element) => {
//     const item = $(element).text().trim();
//     if (item) {
//       description += `${item} `;
//     }
//   });
//   return description.trim();
// }
  
  module.exports = {
    extractPrice,
    extractCurrency,
    extractDescription,
  };
  