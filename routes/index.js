var express = require('express');
var fs = require("fs");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var techs = ['- Empty -'];
    try {
        techs = fs.readFileSync("./data/tech.txt", "utf8").split('\n');
    }
    catch(error){
        console.log(error);
    }
    
    res.render('index', { title: 'My techs', techlist: techs });
});

module.exports = router;
