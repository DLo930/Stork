import openSocket from 'socket.io-client';

const endpoint = 'http://localhost:8000';
const socket = openSocket(endpoint);

const subscribeToPost = (cb) => {
  socket.on('list posted', (json) => cb(null, json));
};

const subscribeToSupplied = (cb) => {
  socket.on('supplied', (json) => cb(null, json));
};

export { subscribeToPost, subscribeToSupplied };