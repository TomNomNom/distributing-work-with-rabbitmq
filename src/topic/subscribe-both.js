var amqp = require('amqp');

var connection = amqp.createConnection({host: 'localhost'});

connection.on('ready', function(){

  connection.queue('both-queue', function(queue){
    queue.bind('topic-exchange', 'numbers.*');
    queue.subscribe(function(message){
      console.log('All: ' + JSON.stringify(message));
    });
  });

});
