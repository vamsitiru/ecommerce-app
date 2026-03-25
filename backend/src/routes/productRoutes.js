async function routes(fastify, options ) {
    fastify.get('/', async (request, reply) => {
        return [
      { _id: 1, name: "iPhone", price: 80000 },
      { _id: 2, name: "Shoes", price: 3000 },
    ];
    });
}

export default routes;