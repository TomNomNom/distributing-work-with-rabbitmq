var amqp = require('amqp');

var connection = amqp.createConnection({host: 'localhost'});

connection.on('ready', function(){
    
  connection.queue('basic-queue', function(){

    var counter = 0;
    setInterval(function(){
      connection.publish('basic-queue', {
        "count": counter,
      });
      counter++;
    }, 1000);
  
  });
});
