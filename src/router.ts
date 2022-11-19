import { Router } from 'express';

import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { listProducts } from './app/useCases/products/listProducts';

export const router = Router();

// list categories
router.get('/categories', listCategories);

// create category
router.post('/categories', createCategory);

// list products
router.get('/prodcuts', listProducts);

// create product
router.post('/prodcuts', (req, res) => {
  res.send('Ok');
});

// get products by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('Ok');
});

// list order
router.get('/orders', (req, res) => {
  res.send('Ok');
});

// create order
router.post('/orders', (req, res) => {
  res.send('Ok');
});

// change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('Ok');
});

// delete / cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.send('Ok');
});