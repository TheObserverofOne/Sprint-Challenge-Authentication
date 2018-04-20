<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.  ::  Middleware helps you access certain extra features that make express code look neater, more manageable, and DRY.  They are functions that have next() methods to jump to different middlewares or onto other parts of the server code being initialized.  Sessions allows for the browser to send a cookie that will log the user's activity and will remember their activity each time they visit the page with that cookie.  Bcrypt hashes plain-text passwords but also has other use cases for encryption.  JWT are json web tokens which encode whatever data is sent to the server.  The token persists during a set amount of time and is unique to each user.

2.  What does bcrypt do in order to prevent attacks?  ::  Hackers will eventually be frustrated and give up trying because each bcrypt round will slow them down, making it difficult to hack in an instant, weeks, months, years, etc... depending on the rounds used.

3.  What are the three parts of the JSON Web Token? :: headers, payload, and signatures
