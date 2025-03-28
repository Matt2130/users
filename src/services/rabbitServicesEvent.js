/* import amqp from 'amqplib';
import dotenv from 'dotenv';

dotenv.config();

const RABBITMQ_URL = process.env.RABBIT_HOST;
const RABBIT_EXCHANGE = "user_event";
const RABBIT_ROUTING_KEY = "user.created";

export async function userCreatedEvent(user) {
    const connection = await amqp.connect({
        protocol: 'amqp',
        hostname: process.env.RABBIT_HOST || 'rabbitmq',
        port: 5672,
        username: process.env.RABBITMQ_USER || 'user',
        password: process.env.RABBIT_PASS || 'password'
    });
    
    const channel = await connection.createChannel();
    
    await channel.assertExchange(RABBIT_EXCHANGE, "topic", { durable: true});

    const message = JSON.stringify(user);
    channel.publish(RABBIT_EXCHANGE, RABBIT_ROUTING_KEY, Buffer.from(message));

    console.log(`exchange "${RABBIT_EXCHANGE}",
        routing key "${RABBIT_ROUTING_KEY}": ${message}`);

    setTimeout(() => {
        connection.close();
    }, 500)
} */

    import amqp from 'amqplib';
    import dotenv from 'dotenv';
    
    dotenv.config();
    
    const RABBITMQ_URL = process.env.RABBITMQ_URL;
    const RABBIT_EXCHANGE = "user_event";
    const RABBIT_ROUTING_KEY = "user.created";
    
    export async function userCreatedEvent(user) {
        try {
            const connection = await amqp.connect(RABBITMQ_URL);
            const channel = await connection.createChannel();
            
            await channel.assertExchange(RABBIT_EXCHANGE, "topic", { durable: true });
    
            const message = JSON.stringify(user);
            channel.publish(RABBIT_EXCHANGE, RABBIT_ROUTING_KEY, Buffer.from(message));
    
            console.log(`Mensaje enviado -> Exchange: "${RABBIT_EXCHANGE}", Routing Key: "${RABBIT_ROUTING_KEY}", Mensaje: ${message}`);
    
            setTimeout(() => {
                connection.close();
            }, 500);
        } catch (error) {
            console.error("Error al publicar en RabbitMQ:", error);
        }
    }    