var amqp = require('amqp');

var connection = amqp.createConnection({host: 'localhost'});

connection.on('ready', function(){
    
  setInterval(function(){
    connection.publish('test-queue', {
      "address": "mail@tomnomnom.com",
      "subject": "Greetings",
      "message": "Hi Tom!"
    });
  }, 1000);
});
