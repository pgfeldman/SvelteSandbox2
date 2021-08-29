import { writable } from 'svelte/store';
import { browser } from '$app/env';

const messageStore = writable('');

const protocol = browser ? window.location.protocol === 'https:' ? 'wss:' : 'ws:' : '';
const socket = browser ? new WebSocket(`${protocol}//${window.location.hostname}:3001`) : null;

if (socket) {
  // Connection opened
  socket.addEventListener('open', function (event: Event) {
    console.log('Web socket open!', event);
  });

  // Listen for messages
  socket.addEventListener('message', function (event) {
    console.log('Received message from server!', event)
    messageStore.set(event.data);
  });

  socket.addEventListener('error', (err) => {
    console.error('web socket client err', err);
  });
}

const sendMessage = (message: string | ArrayBufferLike | Blob | ArrayBufferView): void => {
  if (socket.readyState <= 1) {
    socket.send(message);
  }
}


export default {
  subscribe: messageStore.subscribe,
  sendMessage
}
