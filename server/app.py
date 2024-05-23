from flask import Flask, jsonify
import mysql.connector

app = Flask(__name__)

# Establish a connection to the database
cnx = mysql.connector.connect(
    user='root',
    password='Ban4ever!#',
    host='localhost',
    port='3305',
    database='brs_autoschool',
    auth_plugin='mysql_native_password'
)

cursor = cnx.cursor()

@app.route('/api/users', methods=['GET'])
def get_data():
    cursor.execute("SELECT * FROM users_admin")

    # Fetch the results
    results = cursor.fetchall()
    
    data = []
    for row in results:
        data.append({
            'id': row[0],
            'username': row[1],
            'password': row[2],
            'email': row[3],
            'functie': row[4],
        })

    # Close the cursor and connection
    cursor.close()
    cnx.close()

    # Return the data as a JSON response
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)