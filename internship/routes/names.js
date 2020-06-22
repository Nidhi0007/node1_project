var express =require('express');
var router= express.Router();
var mysql =require('mysql');

var connection =mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database: 'letsapp'

});
connection.connect(function(err){
    if (err) throw err;
    console.log('connected!');

})


router.get('/', function(req, res, next){
    var query ='select * from names';

    connection.query(query, function(err, rows, fields){
        if (err) throw err;
        res.json(rows);
       

    })
});

module.exports = router;