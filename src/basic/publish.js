var amqp = require('amqp');

var connection = amqp.createConnection({host: 'localhost'});

connection.on('ready', function(){
    
  connection.queue('test-queue', function(){

    var counter = 0;
    setInterval(function(){
      connection.publish('test-queue', {
        "count": counter,
      });
      counter++;
    }, 1000);
  
  });
});
