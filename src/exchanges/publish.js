var amqp = require('amqp');

var connection = amqp.createConnection({host: 'localhost'});

connection.on('ready', function(){
    
  connection.exchange('test-exchange', {}, function(exchange){

    var counter = 0;
    setInterval(function(){
      exchange.publish('test-routing-key', {
        "count": counter,
      });
      counter++;
    }, 500);
  
  });
});
