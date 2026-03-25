import app from './src/app.js';

const PORT = process.env.PORT || 5000;

const start = async () => {
    try {
        app.listen({ port: PORT });
        console.log(`Server is running on port ${PORT}`);
    } catch (err) {
        console.error('Error starting server:', err);
        process.exit(1);
    }
};

start();