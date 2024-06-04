# 0x05-Node_JS_basic

## 0. 0-console.js: Executing basic javascript with Node JS
## 1. 1-stdin.js: Using Process stdin
## 2. 2-read_file.js: Reading a file synchronously with Node JS
## 3. 3-read_file_async.js: Reading a file asynchronously with Node JS
## 4. 4-http.js: Create a small HTTP server using Node's HTTP module
## 5. 5-http.js: Create a more complex HTTP server using Node's HTTP module
## 6. 6-http_express.js: Create a small HTTP server using Express
## 7. 7-http_express.js: Create a more complex HTTP server using Express
## 8. Organize a complex HTTP server using Express:

### 8.1 Organize the structure of the server
#### 2 directories within:
- controllers
- routes
#### full_server/utils.js, in the file a function named readDatabase that accepts a file path as argument:
- Reads the database asynchronously
- Returns a promise
- When the file is not accessible, it rejects the promise with the error
- When the file can be read, it returns an object of arrays of the firstname of students per fields

### 8.2 Write the App controller
#### full_server/controllers/AppController.js:
- Contains a class named AppController. With a static method named getHomepage
- The method accepts request and response as argument. It returns a 200 status and the message Hello Holberton School!

### 8.3 Write the Students controller
#### full_server/controllers/StudentsController.js, a class named StudentsController, with two static methods:
##### The first one is getAllStudents:
- The method accepts request and response as argument
- It returns a status 200
- It calls the function readDatabase from the utils file, and display in the page:
- First line: This is the list of our students
- And for each field (order by alphabetic order case insensitive), a line that displays the number of students in the field, and the list of first names (ordered by appearance in the database file) with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
- If the database is not available, it returns a status 500 and the error message Cannot load the database
##### The second one is getAllStudentsByMajor:
- The method accepts request and response as argument
- It returns a status 200
- It uses a parameter that the user can pass to the browser major. The major can only be CS or SWE. If the user is passing another parameter, the server should return a 500 and the error Major parameter must be CS or SWE
It calls the function readDatabase from the utils file, and display in the page the list of first names for the students (ordered by appearance in the database file) in the specified field List: LIST_OF_FIRSTNAMES_IN_THE_FIELD
- If the database is not available, it should return a status 500 and the error message Cannot load the database

### 8.4 Write the routes
#### full_server/routes/index.js:
- Link the route / to the AppController
- Link the route /students and /students/:majorto the StudentsController

### 8.5 Write the server reusing everything you created
#### full_server/server.js, create a small Express server:
- It should use the routes defined in full_server/routes/index.js
- It should use the port 1245

### 8.6 Update package.json (if you are running it from outside the folder full_server)
If you are starting node from outside of the folder full_server, you will have to update the command dev by: nodemon --exec babel-node --presets babel-preset-env ./full_server/server.js ./database.csv