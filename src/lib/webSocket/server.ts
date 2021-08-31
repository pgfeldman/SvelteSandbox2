import * as WebSocket from 'ws';

const serverOptions: WebSocket.ServerOptions = {
  port: 3001,
}
let wsServer: WebSocket.Server;

if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    if (!global._wssServer) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      global._wssServer = new WebSocket.WebSocketServer(serverOptions);
    }
    wsServer = global._wssServer;
} else {
    // In production mode, it's best to not use a global variable.
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    wsServer = new WebSocket.WebSocketServer(serverOptions);
}
// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default wsServer;
