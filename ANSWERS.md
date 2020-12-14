## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. Explain what a token is used for.
A token is used to authenticate a logged-in user to a web app without having to send the credentials every time a request is made to the server.  

2. What steps can you take in your web apps to keep your data secure?
- Secure the application web pages behind a login page. Anyone without the proper credentials can't view the data.
- Send the login credentials using SSL over the network when logging in to the server.
- If the server uses JWT (JSON web tokens), then these must not be stored in the application. An example of that is to store the token in local storage instead.
- Any API or other secret keys must be stored separately in .env files and not in the application. 

3. Describe how web servers work.
Clients make HTTP requests over the internet to web servers. Web servers receive these requests, process them and send back a response to the client that made the request.

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
CREATE: POST
READ: GET
UPDATE: PUT
DELETE: DELETE