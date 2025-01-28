const express = require('express');
const api = require('./routes/api');
const sequelize = require('./models/connectionBDD');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const port = 3006;

app.use(express.json());

app.use('/api', api);

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