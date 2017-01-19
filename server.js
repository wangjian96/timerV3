//Wang Jian
//CSE270E
//2017 Jan 13
//Assignment10
var express = require('express'),
    config = require('./server/configure'),
    app = express(),
    mongoose = require('mongoose');
app.set('port', process.env.PORT || 3630);
app.set('views', __dirname + '/views');
app = config(app);
mongoose.connect('mongodb://localhost/info', function(err,db){
    if(err){
       console.error(err);
    }else{
       console.log('connected'); 
    }
});
mongoose.connection.on('open', function() {
console.log('Mongoose connected.');
});
//app.get('/', function(req, res){
  // res.send('Hello World'); 
//});
app.listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});
