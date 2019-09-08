<<<<<<< HEAD
import openSocket from 'socket.io-client';

const endpoint = 'http://localhost:8000';
const socket = openSocket(endpoint);
=======
import io from 'socket.io-client';

const endpoint = 'http://localhost:5000';
const socket = io(endpoint);
>>>>>>> 50029069381915c28d3cc52ae5d4486eb1796dfd

const subscribeToPost = (cb) => {
  socket.on('list posted', (json) => cb(null, json));
};

const subscribeToSupplied = (cb) => {
  socket.on('supplied', (json) => cb(null, json));
};

export { subscribeToPost, subscribeToSupplied };