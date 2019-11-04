const express = require('express');
// const multer  = require('multer');
const router = require('./router')

const app = express();

app.use(express.static('../web'));
app.use(router);

app.listen('8000',()=>{
    console.log('服务启动，8000端口');
})

