var amqp = require('amqp');

var connection = amqp.createConnection({host: 'localhost'});

connection.on('ready', function(){

  connection.queue('odd-queue', function(queue){
    queue.bind('direct-exchange', 'odd');
    queue.subscribe(function(message){
      console.log('Odd: ' + JSON.stringify(message));
    });
  });

});
