const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Permitindo o app trabalhar com JSON
app.use(bodyParser.json());

app.get('/api/filmes', (req, res) => {
    const filmes = [
        {nome: 'Spider Man No Way Home'},
        {nome: 'The Batman'},
        {nome: 'The Terminator'}
    ]
    res.send(JSON.stringify(filmes));
});

// Por onde a API aceita requisições
app.listen(3000, () => {
    console.log('API já está funcionando e aceitando requisições!');
});