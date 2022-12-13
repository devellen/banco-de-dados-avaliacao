const express = require('express');
const mysql = require('mysql2');
const connect = require('./conexao');

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// cadastro
app.get('/cadastros', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery('select * from cliente', res);
})

app.post('/cadastro', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery("insert into cliente (nome, email, senha) value('" + req.body.nome + "', '" + req.body.email + "', '" + req.body.senha + "')", res);
})

//produtos
app.get('/produtos', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery('select * from produto', res);
})

app.post('/produto', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery("insert into produto (nomeProduto, capacidade, preco) value('" + req.body.nomeProduto + "', '" + req.body.capacidade + "', '" + req.body.preco + "')", res);
})

app.put('/produtos/:id', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery("update produto set nomeProduto='" + req.body.nomeProduto + "', capacidade='" + req.body.capacidade + "', preco='" + req.body.preco + "' where id=" + req.params.id, res);
})

app.delete('/produtos/:id', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery("delete from produto where id=" + req.params.id, res);
})



const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));