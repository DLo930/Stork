import os

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from flask import Flask
from flask_socketio import SocketIO


app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

cred = credentials.Certificate('stork-20b75-firebase-adminsdk-ml5n9-9eac6fb09d.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

@app.route('/')
def hello_world():
    return 'Hello, World!'

@socketio.on('connect')
def test_connect():
    emit('my response', {'data': 'Connected'})

@socketio.on('disconnect')
def test_disconnect():
    print('Client disconnected')

@socketio.on('list post')
def handle_list_post(json):
    print(f'Received json: {str(json)}')
    emit('list posted', json, broadcast=True)

if __name__ == '__main__':
    socketio.run(app)