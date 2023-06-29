const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "react-syntax-highlighter",
  "swagger-client",
  "swagger-ui-react",
  "swagger-ui-dist",
]);

const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    API_DOCS_PATH: "/api/api-docs",
  },
  // Add any other Next.js configuration options as needed
};

module.exports = withPlugins([[withTM]], nextConfig);
