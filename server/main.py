from flask import Flask, request, jsonify
import mysql.connector

app = Flask(__name__)


# Set Content Security Policy (CSP) header for all responses
@app.after_request
def set_content_security_policy(response):
    response.headers['Content-Security-Policy'] = "default-src 'self' http://localhost:5000"
    return response


def login(username, password):
    cnx = mysql.connector.connect(
        user='root',
        password='Ban4ever!#',
        host='localhost',
        database='brs_autoschool'
    )

    cursor = cnx.cursor()

    cursor.execute("SELECT * FROM admin_users WHERE username = %s AND password = %s", (username, password))

    results = cursor.fetchall()

    cursor.close()
    cnx.close()

    if len(results) > 0:
        return True
    else:
        return False


@app.route('/api/login', methods=['POST'])
def login_route():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if login(username, password):
        return jsonify({'message': 'Login successful'})
    else:
        return jsonify({'message': 'Invalid username or password'})


if __name__ == '__main__':
    app.run(debug=True, port=8080)
