import * as amqp from 'amqplib'

let client:amqp.Connection
let clientPromise

if (process.env.NODE_ENV === 'development') {

    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    if (!global._amqpClientPromise) {
        client = amqp;
        global._amqpClientPromise = client.connect('amqp://localhost');
    }
    clientPromise = global._amqpClientPromise;
} else {
    // In production mode, it's best to not use a global variable.
    client = amqp;
    clientPromise = client.connect('amqp://localhost');
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;