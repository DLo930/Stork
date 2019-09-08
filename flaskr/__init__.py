import os

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from flask import Flask
from flask_socketio import SocketIO, emit

DEV = True

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
socketio = SocketIO(app, cors_allowed_origins="*")

cred = credentials.Certificate('stork-20b75-firebase-adminsdk-ml5n9-9eac6fb09d.json')
firebase_admin.initialize_app(cred)
lists = firestore.client().collection('lists')


@socketio.on('get places')
def get_places():
    docs = lists.stream()
    places = []
    for doc in docs:
        places.push(doc)
    emit('places', places)

@socketio.on('connect')
def test_connect():
    print('Client connected!')
    emit('my response', {'data': 'Connected'})

@socketio.on('disconnect')
def test_disconnect():
    if DEV: # Delete all but the first document
        i = 0
        iter = lists.stream()
        for it in iter:
            if i > 0:
                it.delete()
            i += 1
    print('Client disconnected')


@socketio.on('list post')
def handle_list_post(json):
    print(f'Received json: {str(json)}')
    lists.add(json)
    emit('list posted', json, broadcast=True)

@socketio.on('supply')
def handle_supply(json):
    print(f'Received json: {str(json)}')
    for field in json.lists:
        doc = lists.document(field.id)
        doc.set({ items: field.list });
    emit('supplied', json, broadcast=True)


if __name__ == '__main__':
    socketio.run(app)