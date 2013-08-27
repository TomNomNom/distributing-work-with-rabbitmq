var amqp = require('amqp');

var connection = amqp.createConnection({host: 'localhost'});

connection.on('ready', function(){
    
  connection.exchange('test-exchange', {}, function(exchange){

    var counter = 0;
    setInterval(function(){

      var routingKey = 'even';
      if (counter % 2){
        routingKey = 'odd';
      }

      exchange.publish(routingKey, {
        "count": counter
      });

      counter++;
    }, 500);
  
  });
});
