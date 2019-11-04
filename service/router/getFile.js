
const express = require('express');
const path = require('path');
var fs = require('fs');
const router = express.Router();

router.get('/getFile', (req, res) => {
    var files = fs.readdirSync('./public/uploads');
    if (files.length > 0) {
        var file = fs.readFileSync('./public/uploads/' + files[0]).toString('base64')
        res.send({ code: 'success', img: file })
    } else {
        res.send({ code: '0', msg: '未读取到图片' })
    }
})

module.exports = router;