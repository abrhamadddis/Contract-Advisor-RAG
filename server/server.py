from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import json

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return "hllo, world"

@app.route('/upload_file', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})

    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    if file:
        upload_dir = 'uploads'  # Specify the directory where you want to save uploaded files
        os.makedirs(upload_dir, exist_ok=True)

        file.save(os.path.join(upload_dir, "data.txt"))

        return jsonify({'message': 'file is uploaded successfull' })


if __name__ == '__main__':
    app.run()