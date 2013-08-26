var amqp = require('amqp');

var connection = amqp.createConnection({host: 'localhost'});

connection.on('ready', function(){
  connection.queue('test-queue', function(queue){

    // Get all messages
    queue.bind('#');

    // Subscribe to the queue
    queue.subscribe(function(message){
      console.log(message);
    });
  });
});
