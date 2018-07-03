const router = require('express').Router();
const path = require('path');

router.all('*', function (req, res){
   // res.sendFile(path.resolve('dist','index.html'));
    res.sendFile(path.resolve('./angular/dist/angular/index.html'));
    //res.sendFile(path.resolve("./public/dist/index.html"))
});

module.exports = router;