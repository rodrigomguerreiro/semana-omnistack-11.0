const express = require('express'); //Importa módulo
const cors = require('cors');
const routes = require('./routes'); //O ./ serve para especificar que é um arquivo na mesma pasta

const app = express(); //Criando a aplicacao

app.use(cors());
app.use(express.json()); //Informa ao app que utilizará json para o corpo das requisições, ou seja, o express converte o json da requisição em um objeto js 
app.use(routes);


app.listen(3333); //A aplicacao escuta a porta setada
