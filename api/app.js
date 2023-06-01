const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql');
const path = require('path');
const app = express();
const port = process.env.port || 3333;

app.use(morgan('tiny'));

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'web_booking'
});

connection.connect(err=>{
    if(err) throw err;
    console.log('Connected!');
});

let username = '';
let password = '';

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/login', (req, res)=>{
   res.sendFile(path.resolve('./views/login.html'));
   username = req.query.username;
   password = req.query.password;
   if(username && password){
    let sql = `select * from personal_user where username = '${username}'`;
    connection.query(sql, (err, row)=>{
        if(err) throw err;
        if(row[0].password == password){
            res.send('Đăng nhập thành công');
        }
    })
   }
});

app.listen(port,() => console.log(`Example app listening on port ${port}!`));