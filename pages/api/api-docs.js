const fs = require("fs");
const path = require("path");
const SwaggerUIBundle = require("swagger-ui-dist").SwaggerUIBundle;

const apiDocsFile = path.resolve(process.cwd(), "plantprocare-api.yaml");
const apiDocs = fs.readFileSync(apiDocsFile, "utf8");

module.exports = function handler(req, res) {
  if (typeof window === "undefined") {
    // Server-side rendering
    res.setHeader("Content-Type", "text/plain");
    res.send(apiDocs);
  } else {
    // Client-side rendering
    res.setHeader("Content-Type", "text/html");
    res.send(`
      <html>
        <head>
          <title>PlantProCare API Documentation</title>
          <style>
            /* Customize the UI with green shades */
            body {
              background-color: #f0f5f0;
            }

            .swagger-ui .topbar {
              background-color: #3ca55c;
            }

            .swagger-ui .topbar .wrapper a {
              color: #ffffff;
            }

            .swagger-ui .info .title small {
              color: #3ca55c;
            }
          </style>
        </head>
        <body>
          <div id="swagger-ui"></div>
          <script src="https://unpkg.com/swagger-ui-dist@latest/swagger-ui-bundle.js"></script>
          <script>
            const spec = ${JSON.stringify(apiDocs)};
            const ui = SwaggerUIBundle({
              spec,
              dom_id: '#swagger-ui',
              presets: [SwaggerUIBundle.presets.apis],
              theme: {
                colors: {
                  primary: "#3ca55c",
                  success: "#3ca55c",
                  http: {
                    get: "#3ca55c",
                  },
                },
              },
            });
          </script>
        </body>
      </html>
    `);
  }
};
