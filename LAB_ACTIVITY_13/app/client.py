import requests

url = 'http://localhost:5000/user'


def signup():
    # name = input()
    # email = input('Enter your email: ')
    # password = input('Enter your password: ')
    name = "vaibhav"
    email = "ads"
    password = "ads123"
    data = {'name': name, 'email': email, 'password': password}
    resp = requests.post(url + '/signup', json=data)
    print(resp.text)


def login():
    email = "ads"
    password = "ads123"
    data = {'email': email, 'password': password}
    resp = requests.post(url + '/login', json=data)
    print(resp.text)


# def main():
#     while True:
#         print('1. Signup')
#         print('2. Login')
#         print('3. Exit')
#         choice = input('Enter your choice: ')
#         choice = int(choice)
#         if choice == 1:
#             signup()
#         elif choice == 2:
#             login()
#         elif choice == 3:
#             break
#         else:
#             print('Invalid choice')


# signup()
login()
