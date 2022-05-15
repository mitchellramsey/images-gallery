""" Backend application for Images Gallery application """
import os
import requests
from flask import Flask, request
from flask_cors import CORS
from dotenv import load_dotenv


load_dotenv(dotenv_path="./.env.local")

UNSPLASH_URL = "https://api.unsplash.com/photos/random"
UNSPLASH_KEY = os.environ.get("UNSPLASH_APP_KEY", "abc")
DEBUG = bool(os.environ.get("DEBUG", True))

if not UNSPLASH_KEY:
    raise EnvironmentError("Please create .env.local file and insert UNSPLASH_API_KEY")

app = Flask(__name__)
CORS(app)

app.config["DEBUG"] = DEBUG


@app.get("/new-image")
def new_image():
    """Grabs and returns random image from Unsplash API with provided query"""
    word = request.args.get("query")
    headers = {"Authorization": "Client-ID " + UNSPLASH_KEY, "Accept-Version": "v1"}
    payload = {"query": word}
    response = requests.get(url=UNSPLASH_URL, headers=headers, params=payload)
    return response.json()


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)
