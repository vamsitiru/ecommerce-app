import Product from './product.model.js';

export const createProduct = (productData) => Product.create(productData);
export const getAllProducts = () => Product.find();
export const getProductById = (id) => Product.findById(id);
export const updateProduct = (id, updateData) => Product.findByIdAndUpdate(id, updateData, { new: true });
export const deleteProduct = (id) => Product.findByIdAndDelete(id);
