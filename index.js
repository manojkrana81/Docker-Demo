const express = require('express');
const app = express();

app.get('/ping', (req, res)=>{
    console.log('hey there');
    res.send('pong');
});

app.listen(3000, ()=>{
    console.log("server started");
});


