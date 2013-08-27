var amqp = require('amqp');

var connection = amqp.createConnection({host: 'localhost'});

connection.on('ready', function(){
    
  connection.exchange('fanout-exchange', {type: 'fanout'}, function(exchange){

    var counter = 0;
    setInterval(function(){

      exchange.publish('', {
        "count": counter
      });

      counter++;
    }, 500);
  
  });
});
