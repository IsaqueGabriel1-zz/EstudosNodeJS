const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const con = require('./config/conexao')
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('./public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs');




app.post('/usuario', (req, res)=>{
    const {nome, email, senha} = req.body;
    con.query(`INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}')`, (err, result)=>{
        if(err){
          res.send("ERRO")
          console.log(err)
        }else{
          console.log("Inserido :)")
        }
      })
      
})

app.get('/usuario', (req, res)=>{
    res.render('index')
})


app.listen(4000, ()=>{console.log("Tudo certo")})