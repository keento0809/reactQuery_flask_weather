# Standard libraries of Python
import json
import os
import sqlite3

# Libraries
from flask import Flask
from flask_cors import CORS
from flask_login import (
    LoginManager,
    current_user,
    login_required,
    login_user,
    logout_user,
)
from oauthlib.oauth2 import WebApplicationClient
from oauthlib.oauth2 import requests

# Internal imports
from db import init_db_command
from user import user

app = Flask(__name__)
CORS(app)


@app.route("/members")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}


if (__name__ == "__main__"):
    app.run(debug=True)
