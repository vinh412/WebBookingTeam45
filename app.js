const express = require('express');
const app = express();
const port = process.env.port || 3333;

app.get('/', (req, res)=>{
    res.send('Hello baby');
});

app.listen(port,() => console.log(`Example app listening on port ${port}!`));