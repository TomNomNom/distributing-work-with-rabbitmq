var amqp = require('amqp');

var connection = amqp.createConnection({host: 'localhost'});

connection.on('ready', function(){
  connection.queue('basic-queue', function(queue){

    // Subscribe to the queue
    queue.subscribe(function(message){
      console.log(message);
    });
  });
});
