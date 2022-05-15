from flask import Flask, request
from dotenv import load_dotenv
import requests
import os

load_dotenv(dotenv_path='./.env.local')

UNSPLASH_URL = 'https://api.unsplash.com/photos/random'
UNSPLASH_KEY = os.environ.get('UNSPLASH_APP_KEY', 'abc')
DEBUG = bool(os.environ.get('DEBUG', True))

if not UNSPLASH_KEY:
    raise EnvironmentError('Please create .env.local file and insert UNSPLASH_API_KEY')

app = Flask(__name__)
print(DEBUG)
app.config['DEBUG'] = DEBUG

@app.get("/new-image")
def new_image():
    word = request.args.get("query")
    headers = {
        'Authorization': 'Client-ID ' + UNSPLASH_KEY,
        'Accept-Version': 'v1' 
    }
    payload = {
        'query': word
    }
    r = requests.get(url=UNSPLASH_URL, headers=headers, params=payload)
    return r.json()


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5050)


