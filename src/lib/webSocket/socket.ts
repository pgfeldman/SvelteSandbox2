import wsServer from './server';

let socket;

wsServer.on('connection', function connection(ws) {
  socket = ws;
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
}).on('listening', () => {
  console.log('wss listening on port', wsServer.options.port)
})
.on('error', (err) => {
  console.error('wss error', err);
})

export function sendMessage(data: any): void {
  if (socket) {
    socket.send(data);
  } else {
    console.error('Could not send message to client')
  }

}
