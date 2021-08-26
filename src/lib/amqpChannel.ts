import clientPromise from "$lib/amqp";
import type { Channel, Message } from "amqplib";

let channel: Channel;

function onMesasge(message: Message | null) {
    console.log('Received Message in amqpChannel.ts', message.content.toString());
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
