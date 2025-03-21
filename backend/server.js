const express = require('express');
const path = require('path');
const app = express();
const port = 25000;

// Habilita o CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Permite todas as origens
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Configura o servidor para servir arquivos estáticos da pasta 'frontend'
app.use(express.static(path.join(__dirname, '../frontend')));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Rota para servir o arquivo data.json
app.get('/data', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/data.json'));
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Backend rodando na porta ${port}`);
});