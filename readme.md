## Routes

Server side for Android app: https://github.com/alexanderanchishkin/FuntomHere
Was created for about 4-6 hours.

#### POST /register/

Requesting from body:
 - username: String
 - password: String
 
Respond in body:
 - id: String

#
#### POST /login/

Requesting from body:
 - username: String
 - password: String
 
Respond in body:
 - id: String
  
#
#### POST /create-clip/

Requesting from body:

 - userId: String
 - soundFile: String
 - x: Number
 - y: Number
 - friendUserId?: String
    
Respond in body:
 - id: String

#
#### POST /clips/

Requesting from body:
 - x: Number
 - y: Number
 - friendUserId?: String

Respond in body:
 - clips: Array<ClipObject>
 
 #
 #### POST /clip/
 
Requesting from body:
  - id: String
  
Respond in body:
  - ClipObject
     

 
