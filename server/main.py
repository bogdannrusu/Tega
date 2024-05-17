from flask import Flask, request, jsonify

app = Flask(__name__)

books = {
    "id": 0,
    "author": "Chihua Achebe",
    "language": "English",
    "title": "Things Fall Apart",
}