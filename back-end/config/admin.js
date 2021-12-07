module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4c38a0ba8f2e93ad7ecc5f2fd8cbd1b5'),
  },
});
