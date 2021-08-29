import clientPromise from "$lib/amqp";
import type { Channel, Message } from "amqplib";
import { sendMessage } from './webSocket/socket';

let channel: Channel;

function onMesasge(message: Message | null) {
    if (message) {
        console.log('Received Message in amqpChannel.ts', message.content.toString());
        channel.ack(message);
        sendMessage(message.content.toString());
    }

}

export async function getAmqpChannel(): Promise<Channel> {
    const client = await clientPromise;

    if (!channel) {
        channel = await client.createChannel();
    }

    await channel.assertQueue('hello', {durable:false});

    try {
        await channel.consume('hello', onMesasge);
    } catch (err) {
        console.error('error comsuming message', err);
    }
    return channel;
}
