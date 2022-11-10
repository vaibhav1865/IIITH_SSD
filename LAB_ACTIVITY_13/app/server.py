from flask import Flask, render_template, url_for, request, session, logging, redirect, flash
from flask_sqlalchemy import SQLAlchemy
from flask_login import (LoginManager, login_user,
                         logout_user, login_required, UserMixin)

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SECRET_KEY'] = 'secretkey'

db = SQLAlchemy(app)
login_manager = LoginManager()

# Create a User class that inherits from UserMixin and db.Model.


class User(UserMixin, db.Model):
    # columns for name, email, password
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80),  nullable=False)


db.create_all()

# Create a login_manager that will manage the user session.
login_manager.init_app(app)

# Create a user_loader callback. This callback is used to reload the user object from the user ID stored in the session.


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))
# creating api_endpoints for login and signup
# ENDPOINTS : /user/signup, /user/signin, /user/logout
# Create a signup route.


@app.route('/user/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        req = request.get_json()
        name = req['name']
        email = req['email']
        password = req['password']
        # converting unicode to string
        name = str(name)
        email = str(email)
        password = str(password)
        print(type(name), email, password)

        # user = User.query.filter_by(email=email).first()
        # if user:
        # return 'User already exists'
        # else:
        new_user = User(name=name, email=email, password=password)
        db.session.add(new_user)
        # db.session.commit()
        return 'User created'

 # creating login


@ app.route('/user/login', methods=['POST'])
def login():
    if request.method == 'POST':
        req = request.get_json()
        email = req['email']
        password = req['password']
        # converting unicode to string
        email = str(email)
        password = str(password)
        print((email), password)
        user = User.query.filter_by(email=email).first()
        if user:
            if user.password == password:
                login_user(user)
                return 'Logged in successfully'
            else:
                return 'Incorrect password'
        else:
            return 'User does not exist'


if __name__ == '__main__':
    app.run()
