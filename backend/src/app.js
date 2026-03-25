import Fastify, { fastify } from 'fastify';
import cors from '@fastify/cors';
import productRoutes from './modules/product/product.routes.js';
import connectDB from './db/mongo.js';

const app = Fastify({ logger: true });

// Register CORS plugin
app.register(cors);

app.register(productRoutes, { prefix: '/products' });

// Connect to MongoDB
await connectDB();

export default app;
