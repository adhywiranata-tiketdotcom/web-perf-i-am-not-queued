const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? "https://d6atvetohgs9m.cloudfront.net" : "",
};
