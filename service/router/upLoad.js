
const express = require('express');
const path = require('path');
const multer = require('multer');
const router = express.Router();

const fileFilter = (req, file, cb) => {
    let extName = path.extname(file.originalname)
    let regex = /.jpeg|.png|.gif|.jpg/;
    if (extName, regex.test(extName)) {
        req.fileCheckError = true;
        req.fileCheckMsg = '文件上传成功';
        cb(null, true)
    } else {
        req.fileCheckError = false;
        req.fileCheckMsg = '请上传以png，jpg，gif为后缀的文件';
        cb(null, false)
    }
}
const upload = multer({
    dest: path.join(__dirname, '../public/uploads'),
    limits: { fileSize: 512000 },
    fileFilter,
}).single('avatar')

router.post('/upLoad', (req, res) => {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            console.log(err, 'multer error') //处理multer自身的错误
            res.json({ code: 'error', msg: err.message });
        } else if (err) {
            console.log('normal error', err) // 处理委托给express和上传时express自身的错误
            res.json({ code: 'error', msg: err });
        } else if (Object.keys(req.fileCheckError || {}).length > 0) {
            console.log('req.fileCheckError', req.fileCheckError)
            res.send(JSON.stringify(req.fileCheckError))
        } else {
            if (req.fileCheckError) {
                res.json({ code: 'success', msg: '文件上传成功' });
            } else {
                res.json({ code: 'error', msg: req.fileCheckMsg });
            }
        }
    })
})

module.exports = router;