import clientPromise from "$lib/amqp";
import {Request} from "@sveltejs/kit";
import {Locals} from "$lib/types";

export async function getAmqpChannel() {
    const client = await clientPromise
    const channel = await client

}

// let channel
// let channelPromise
//
// if (process.env.NODE_ENV === 'development') {
//
//     // In development mode, use a global variable so that the value
//     // is preserved across module reloads caused by HMR (Hot Module Replacement).
//     if (!global._amqpchannelPromise) {
//         channel = amqp;
//         global._amqpchannelPromise = channel.connect('amqp://localhost');
//     }
//     channelPromise = global._amqpchannelPromise;
// } else {
//     // In production mode, it's best to not use a global variable.
//     channel = amqp;
//     channelPromise = channel.connect('amqp://localhost');
// }
//
// // Export a module-scoped Mongochannel promise. By doing this in a
// // separate module, the channel can be shared across functions.
// export default channelPromise;