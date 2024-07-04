const express = require('express');
const cors = require('cors');
const { scrapeAmazonProduct } = require('./scrap-amazon-website'); // Adjust the path as needed

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/product', async (req, res) => {
  const url = req.query.url;
  const productData = await scrapeAmazonProduct(url);
  if (productData) {
    res.json(productData);
  } else {
    res.status(500).json({ error: 'Failed to fetch product data' });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
