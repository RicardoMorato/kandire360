var amqp = require('amqplib/callback_api');

async function sendEmail(email:string, payload: any){
    amqp.connect('amqp://191.252.110.112:5672', function(error0: any, connection: { createChannel: (arg0: (error1: any, channel: any) => void) => void; }) {
        if (error0) {
            throw error0;
        }
        connection.createChannel((error1, channel) => {
            if (error1) {
            throw error1;
            }
            var queue = 'sendEmail';
            
            let msg = {
                email,
                payload,
            };

            channel.assertQueue(queue, {
            durable: false
            });

            channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)));
        });
    });
}

export {
    sendEmail
}
