## Routes

#### /register/

Requesting from body:
 - username: String
 - password: String
 
Respond in body:
 - id: String

#
#### /login/

Requesting from body:
 - username: String
 - password: String
 
Respond in body:
 - userId: String
  
#
#### /create-clip/

Requesting from body:

 - userId: String
 - soundFile: String
 - position: Object
    - x: Number
    - y: Number
    
Respond in body:
 - id: String
 

 