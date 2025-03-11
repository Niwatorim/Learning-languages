from flask import Flask #Flask
from flask_pymongo import PyMongo #MongoDB
from bson.json_util import dumps #to display values easily from a db
from bson.objectid import ObjectId #for unique ID 
from bson.errors import InvalidId
from flask import jsonify, request #for passing json objects through postman etc.
from werkzeug.security import generate_password_hash, check_password_hash   # for hashing password
import re #for checking email validity

app = Flask(__name__) #initialization

app.secret_key="secretkey"

app.config['MONGO_URI'] = app.config['MONGO_URI'] = "mongodb+srv://niwatorim001:testing123@users.eihuf.mongodb.net/Users?retryWrites=true&w=majority&appName=Users"

mongo = PyMongo(app)



def error(message,status): #response function (mainly used for errors)
    return jsonify({"message":message}),status

def validemail(email): #checking for email validity (in terms of input not if it actually exists) using re module
    valid = re.match(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$', email) #checks if the parameter matches format given
    return (True if valid else False) #returns boolean if it matches the structure for an email

#function for adding new users via post (must be in json format)
@app.route('/add', methods=['POST'])
def add():
    _json= request.json
    _name=_json.get("name")
    _email=_json.get("email")
    _password=_json.get("pwd")

    if not validemail(_email):
        return error("Incorrect email format",404) #email checking

    if mongo.db.user.find_one({'email':_email}):
        return error("User already exists",409) #409 for conflict

    if _name and _email and _password and request.method=='POST': #if the values exist
        _hashed_password=generate_password_hash(_password)
        id=mongo.db.user.insert_one({'name':_name,
                                    'email':_email,
                                    'pwd':_hashed_password})
        return jsonify({"message":"User added successfully"}),201
    else:
        return error("Missing fields (name,email,pwd)",400) #400 for bad request 


#function to get all users
@app.route('/users')
def users():
    users = mongo.db.user.find()
    return dumps(users), 200 # 200 for it working right, returns all users


@app.route('/user/<id>',methods =['GET'])
def user(id):
    try:
        user =mongo.db.user.find_one({'_id': ObjectId(id)})
        if user:
            resp= dumps(user) , 200 #200 for it working right, returns one user with such ID
            return resp
        else: return error("user not found", 404) #404 for not found
    except InvalidId:
        return error("Invalid ID", 400) #bad request

    except Exception as exception:
        return error(str(exception), 500)#server error


@app.route('/delete/<id>', methods=['DELETE']) #deleting a user by typing in ID
def delete_user(id):
    try:    
        mongo.db.user.delete_one({'_id': ObjectId(id)})
        return jsonify("User deleted"),200
    except InvalidId:
        return error("Invalid user ID", 400)
    except Exception as exception:
        return error(str(exception),500) #server error (basically every other problem)




@app.route('/update/<id>', methods =['PUT']) #updating a user if they exist
def update_users(id):
    _id = id
    _json = request.json
    _name = _json.get('name')
    _email = _json.get('email')
    _password = _json.get('pwd')

    
    if not validemail(_email):
        return error("Incorrect email format",404) #email checking
    
    try:
        if _name and _email and _password and _id and request.method == 'PUT':
            _hashed_password = generate_password_hash(_password)

            update = mongo.db.user.update_one({'_id':ObjectId(_id)}, #identifier for the user
                                    {'$set': { #setting the values (this requires user to re-input all values)
                                        'name': _name,
                                        'email': _email,
                                        'pwd': _hashed_password
                                        }}
                                    )
            if update.matched_count > 0: #Did not know this existed, used AI for this optimization
                return jsonify({"message":"Updated successfully"}), 200 #200 for code working fine, user updated
            else:
                return jsonify({"message":"User not found"}),404 #not found error
        else:
            return error("Mising required fields (name, email, password)",400) #400 for bad request
    except InvalidId:
        return error("Invalid ID", 400) #400 for bad request
    except Exception as exception:
        return error("Error",500) # Any other errors



@app.errorhandler(404) #404 handler if appears
def not_found(error=None):
    return jsonify(message = {
        'status' :404,
        'message':'Not Found'+request.url
    }),404

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)
