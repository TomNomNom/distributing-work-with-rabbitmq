var amqp = require('amqp');

var connection = amqp.createConnection({host: 'localhost'});

connection.on('ready', function(){
    
  connection.exchange('topic-exchange', {type: 'topic'}, function(exchange){

    var counter = 0;
    setInterval(function(){

      var routingKey = 'numbers.even';
      if (counter % 2){
        routingKey = 'numbers.odd';
      }

      exchange.publish(routingKey, {
        "count": counter
      });

      counter++;
    }, 500);
  
  });
});
