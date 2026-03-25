import { Schema, model } from "mongoose"


const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: false
    },
    stock: {
        type: Number,
        default: 0,
        required: true
    }
}, {timestamps: true})

const Product = model("Product", productSchema)

export default Product

