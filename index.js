const express = require('express');
const app = express();
const port = 3000;

const path = require("path");

const basePath = path.join(__dirname,'template')

// const checkAuth = function (req, res, next){
//     req.authStatus = true;

//     if(req.authStatus){
//         console.log('Está logado, pode continuar');
//         next();
//     }else{
//         console.log('Não está logado, passe o login para continuar');
//         next();
//     }

// }

// app.use(checkAuth);

app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json());


app.post('/users/save',(req,res) =>{
    // console.log(req.body);

    console.log(`O nome do usuário é ${req.body.name} e ele tem ${req.body.age} anos`);
    res.sendFile(`${basePath}/user_index.html`);
})

app.get('/users/add',(req,res) =>{
    res.sendFile(`${basePath}/user_index.html`);
})

app.get('/users/:id',(req,res) =>{
    const id = req.params.id;
    console.log(`Estamos buscando pelo usuário: ${id}`);
    res.sendFile(`${basePath}/index.html`);

})

app.get('/',(req,res) =>{
    res.sendFile(`${basePath}/index.html`);
})

app.post('/',(req,res) =>{
    res.sendFile(`${basePath}/user_index.html`);
})
app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
})