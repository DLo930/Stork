import io from 'socket.io-client';

const endpoint = 'http://localhost:5000';
const socket = io(endpoint);

const subscribeToPost = (cb) => {
  socket.on('list posted', (json) => cb(null, json));
};

const subscribeToSupplied = (cb) => {
  socket.on('supplied', (json) => cb(null, json));
};

const publishPost = (json) => {
  socket.emit('list post', json);
}

const publishSupply = (json) => {
  socket.emit('supply', json);
}

export { subscribeToPost, subscribeToSupplied, publishPost, publishSupply };