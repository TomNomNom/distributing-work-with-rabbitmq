var amqp = require('amqp');

var connection = amqp.createConnection({host: 'localhost'});

connection.on('ready', function(){

  connection.queue('tomh-queue', function(queue){

    queue.bind('test-exchange', '#');

    queue.subscribe(function(message){
      console.log(message);
    });
  });

});
