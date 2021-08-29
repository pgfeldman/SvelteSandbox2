import { ServerOptions, Server } from 'ws';

const serverOptions: ServerOptions = {
  port: 3001,
}


let wsServer: Server;

if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    if (!global._wssServer) {
      global._wssServer = new Server(serverOptions);
    }
    wsServer = global._wssServer;
} else {
    // In production mode, it's best to not use a global variable.
    wsServer = new Server(serverOptions);
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default wsServer;
