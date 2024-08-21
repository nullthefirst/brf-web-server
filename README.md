### Exercise: Build a Simple Web Server

**Objective:**  
Understand how to build a web server from scratch using plain JavaScript and compare it with creating the same server using Express, a web framework for NodeJS.

#### Part 1: Plain Node

1. **Create a Simple HTTP Server: (Individual)**
   - Use Node.js's built-in `http` module to create a simple web server.
   - The server should handle two routes: `/` (home) and `/about`.
   - In the `/` route, return a simple welcome message.
   - In the `/about` route, return basic information about yourself (e.g., your name, interests, or a short bio).
   - Ensure the server returns a 404 status with a custom message for any other routes.

2. **Discuss the Challenges: (Group)**
   - After completing the server, identify and discuss the challenges faced, such as routing, handling different HTTP methods, and setting up middleware.

#### Part 2: Using Express

1. **Rebuild the Server with Express: (Individual)**
   - Set up the same server using Express.
   - Ensure it has the same routes (`/` and `/about`), with the `/about` route returning your basic information.

2. **Compare and Discuss: (Group)**
   - Compare the two approaches and discuss the benefits of using Express.
