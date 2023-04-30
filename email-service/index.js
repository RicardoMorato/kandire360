var amqp = require('amqplib/callback_api');
const sendEmail  = require('./sendEmail');

amqp.connect('amqp://191.252.110.112:5672', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var queue = 'sendEmail';

    channel.assertQueue(queue, {
      durable: false
    });

    channel.consume(queue, function(msg) {
        const { email, payload } = JSON.parse(msg.content.toString());
        sendEmail(email, payload);
    }, {
        noAck: true
    });
  });
});
