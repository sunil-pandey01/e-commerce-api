const Product = require('../models/product-model.js');

module.exports = {
  createProduct: async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const body = await req.body
      const updatedProduct = await Product.findByIdAndUpdate(id, body, { new: true });

      if (!updatedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }

      res.json(updatedProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const updatedProduct = await Product.findByIdAndDelete(id);

      if (!updatedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }

      res.json({response:"product deleted successfully"});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  searchProducts: async (req, res) => {
    try {
      const { query } = await req.query;
      const products = await Product.find({
        $or: [
          { name: { $regex: query, $options: 'i' } },
          { description: { $regex: query, $options: 'i' } },
          { 'variants.name': { $regex: query, $options: 'i' } },
        ],
      });
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Errorr' });
    }
  },
};
