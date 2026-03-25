import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
} from './product.controller.js';

async function routes(fastify) {
  fastify.post('/', createProduct);
  fastify.get('/', getAllProducts);
  fastify.get('/:id', getProductById);
  fastify.put('/:id', updateProduct);
  fastify.delete('/:id', deleteProduct);
}

export default routes;