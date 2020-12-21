export default () => ({
  env: process.env.NODE_ENV,
  doc: {
    title: process.env.PAGE_TITLE || 'My Resume API',
    profileUrl: process.env.PROFILE_URL,
  },
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    uri: process.env.DATABASE_URI
  },
  userToken: process.env.USER_API_TOKEN,
  adminToken: process.env.ADMIN_API_TOKEN,
});
