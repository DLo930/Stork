import os

import firebase_admin
from firebase_admin import credentials
from flask import Flask, render_template
from flask_socketio import SocketIO


cred = credentials.Certificate('path/to/serviceAccountKey.json')
firebase_admin.initialize_app(cred)


app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

@socketio.on('message')
def handleMessage(message):
    send(message, broadcast=True)

if __name__ == '__main__':
    socketio.run(app)