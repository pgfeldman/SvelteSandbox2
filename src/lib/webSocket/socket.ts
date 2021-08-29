import { getAmqpChannel } from '$lib/amqpChannel';
import wsServer from './server';
import type { Data } from 'ws';
let socket;



async function sendMessageToChannel(message: Data) {
  const amqpChannel = await getAmqpChannel();

  await amqpChannel.assertQueue('hello', {durable:false});
  await amqpChannel.sendToQueue('hello', Buffer.from(message.toString()));


}
wsServer
  .on('connection', function connection(ws) {
    socket = ws;
    ws.on('message', sendMessageToChannel);
  })
  .on('listening', () => {
    console.log('wss listening on port', wsServer.options.port)
  })
  .on('error', (err) => {
    console.error('wss error', err);
  });

export function sendMessage(data: any): void {
  if (socket) {
    socket.send(data);
  } else {
    console.error('Could not send message to client')
  }

}
