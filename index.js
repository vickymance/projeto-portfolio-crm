const express = require('express');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const yaml = require('js-yaml');
const authRoutes = require('./src/routes/authRoutes');
const imovelRoutes = require('./src/routes/imovelRoutes');
const clienteRoutes = require('./src/routes/clienteRoutes');
const { authenticateJWT } = require('./src/middleware/authMiddleware');

const app = express();
app.use(express.json());

// Swagger
const swaggerDocument = yaml.load(fs.readFileSync('./resources/swagger.yaml', 'utf8'));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rotas
app.use('/auth', authRoutes);
app.use('/imoveis', authenticateJWT, imovelRoutes);
app.use('/clientes', authenticateJWT, clienteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
