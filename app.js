const YAML = require('yamljs');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = YAML.load('./api/swagger/swagger.yaml');
const OpenApiValidator = require("express-openapi-validator");

const app = express();
const port = 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(OpenApiValidator.middleware({
    apiSpec: swaggerDocument,
    validateRequests: true,
    validateResponses: true,
    operationHandlers: __dirname + "/api/controllers"
}));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
