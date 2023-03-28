# Standard libraries of Python
import os

# Libraries
from flask import Flask, render_template, redirect, url_for
from dotenv import load_dotenv
from authlib.integrations.flask_client import OAuth
from flask_cors import CORS

load_dotenv()  # take environment variables from .env.

# Setup Flask app
app = Flask(__name__)
app.secret_key = os.urandom(24)

oauth = OAuth(app)
CORS(app)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/google/')
def google():
    GOOGLE_CLIENT_ID = os.getenv('GOOGLE_CLIENT_ID')
    GOOGLE_CLIENT_SECRET = os.getenv('GOOGLE_CLIENT_SECRET')

    CONF_URL = 'https://accounts.google.com/.well-known/openid-configuration'
    oauth.register(
        name='google',
        client_id=GOOGLE_CLIENT_ID,
        client_secret=GOOGLE_CLIENT_SECRET,
        server_metadata_url=CONF_URL,
        client_kwargs={
            'scope': 'openid email profile'
        }
    )
    # Redirect to google_auth function
    redirect_uri = url_for('google_auth', _external=True)
    print(redirect_uri)
    return oauth.google.authorize_redirect(redirect_uri)


@app.route('/google/auth/')
def google_auth():
    token = oauth.google.authorize_access_token()
    user = oauth.google.parse_id_token(token, None)
    print(" user with google login ", user)
    return redirect('http://127.0.0.1:5173/')


if (__name__ == "__main__"):
    app.run(debug=True)
