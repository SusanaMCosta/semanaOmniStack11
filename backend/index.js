const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana omniStack',
        aluno: 'Susana'
    });
});

app.listen(3333);