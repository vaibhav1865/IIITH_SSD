from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import (LoginManager, login_user,
                         logout_user, login_required, UserMixin)
app = Flask(__name__)
# hello world


@app.route('/')
def hello_world():
    return 'Hello, World!'
# hello name


@app.route('/<name>')
def hello_name(name):
    return 'Hello %s!' % name


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SECRET_KEY'] = 'secretkey'

db = SQLAlchemy(app)
login_manager = LoginManager()


class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80),  nullable=False)


db.create_all()


if __name__ == '__main__':
    app.run()
