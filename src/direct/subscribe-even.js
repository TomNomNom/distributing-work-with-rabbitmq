var amqp = require('amqp');

var connection = amqp.createConnection({host: 'localhost'});

connection.on('ready', function(){

  connection.queue('even-queue', function(queue){
    queue.bind('direct-exchange', 'even');
    queue.subscribe(function(message){
      console.log('Even: ' + JSON.stringify(message));
    });
  });

});
