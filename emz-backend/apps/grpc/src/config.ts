export default () => ({
    database: {
        uri: process.env.MONGODB_URI
    },
    port: process.env.port || 5000,
    url: process.env.url,
});
