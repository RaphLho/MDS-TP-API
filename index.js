const express = require('express');
const api = require('./routes/api');



const stocks = require('./routes/stocks');
const supplierProducts = require('./routes/supplier_products');
const user = require('./routes/users');

const gpuSeries = require('./routes/gpu_series');
const gpuModels = require('./routes/gpu_models');
const manufacturers = require('./routes/manufacturers');
const customerCarts = require('./routes/customer_carts');
const sequelize = require('./models/connectionBDD');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swagger/swagger.js');

const port = 3006;

app.use(express.json());

app.use('/api', api);
app.use('/v0/users', user);
app.use('/v0/supplier_products', supplierProducts);
app.use('/v0/stocks', stocks);
app.use('/v0/gpu_series', gpuSeries);
app.use('/v0/gpu_models', gpuModels);
app.use('/v0/manufacturers', manufacturers);
app.use('/v0/customer_carts', customerCarts);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.get('/socket', (req, res) => {
  res.sendFile(path.join(__dirname, 'SocketIO.html'));
});

io.on('connection', (socket) => {
  console.log('Un utilisateur s\'est connecté');

  socket.on('chat message', (data) => {
    // Diffuse le message à tous les clients connectés sauf l'émetteur
    socket.broadcast.emit('chat message', data);
  });

  socket.on('disconnect', () => {
    console.log('Un utilisateur s\'est déconnecté');
  });
});

sequelize.sync().then(() => {
  console.log('✅ Base de données synchronisée');
  server.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
  });
}).catch(err => {
  console.error('❌ Erreur lors de la synchronisation de la base de données :', err);
});