var express = require('express');
var fs = require("fs");
var router = express.Router();
global.techsFilePath = "./data/tech.txt";

/* GET home page. */
router.get('/', function(req, res, next) {
    var techs = ['- Empty -'];
    try {
        techs = fs.readFileSync(global.techsFilePath, "utf8").split('\n');
    }
    catch(error){
        console.log(error);
    }
    
    res.render('index', { title: 'My techs', techlist: techs });
});

module.exports = router;
