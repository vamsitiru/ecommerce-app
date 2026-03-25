import {
  createProduct as repoCreateProduct,
  getAllProducts as repoGetAllProducts,
  getProductById as repoGetProductById,
  updateProduct as repoUpdateProduct,
  deleteProduct as repoDeleteProduct
} from './product.repository.js';

const productService = {
  createProduct: (productData) => repoCreateProduct(productData),
  getAllProducts: () => repoGetAllProducts(),
  getProductById: (id) => repoGetProductById(id),
  updateProduct: (id, updateData) => repoUpdateProduct(id, updateData),
  deleteProduct: (id) => repoDeleteProduct(id),
};

export default productService;
