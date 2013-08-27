var amqp = require('amqp');

var connection = amqp.createConnection({host: 'localhost'});

connection.on('ready', function(){

  connection.queue('fanout-queue-one', function(queue){
    queue.bind('fanout-exchange', '#');
    queue.subscribe(function(message){
      console.log("One: " + JSON.stringify(message));
    });
  });

});
