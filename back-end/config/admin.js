module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f50ac2249a5681a27100518d61f1f92b'),
  },
});
