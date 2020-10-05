import express from 'express';
import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';

const router = express.Router();

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// @desc Fetch single products
// @route GET /api/product/id
// @access Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    console.log(`${req.params.id}`.green.inverse);
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404);
      throw new Error('Product Not Found');
    } else {
      res.json(product);
    }
  })
);

export default router;
