import service from './product.service.js';

export const createProduct = async (req, reply) => {
  try {
    const product = await service.createProduct(req.body);
    reply.code(201).send(product);
  } catch (error) {
    reply.code(500).send({ error: error.message });
  }
};

export const getAllProducts = async (req, reply) => {
  try {
    const products = await service.getAllProducts();
    reply.code(200).send({ data: products });
  } catch (error) {
    reply.code(500).send({ error: error.message });
  }
};

export const getProductById = async (req, reply) => {
  try {
    const product = await service.getProductById(req.params.id);
    if (!product) {
      return reply.code(404).send({ message: 'Product not found' });
    }
    reply.code(200).send(product);
  } catch (error) {
    reply.code(500).send({ error: error.message });
  }
};

export const updateProduct = async (req, reply) => {
  try {
    const updatedProduct = await service.updateProduct(req.params.id, req.body);
    if (!updatedProduct) {
      return reply.code(404).send({ message: 'Product not found' });
    }
    reply.code(200).send(updatedProduct);
  } catch (error) {
    reply.code(500).send({ error: error.message });
  }
};

export const deleteProduct = async (req, reply) => {
  try {
    const deleted = await service.deleteProduct(req.params.id);
    if (!deleted) {
      return reply.code(404).send({ message: 'Product not found' });
    }
    reply.code(204).send();
  } catch (error) {
    reply.code(500).send({ error: error.message });
  }
};

const productController = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};

export default productController;