# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

steps in making this

5. connect to database
6. create models using mongoose
   i. for users
   ii. create a folder inside the api folder called models and create a file in it
   iv. in the file import moongoose and create a schema
   there are setting rules wee add to the schema when creating a username
   i. type - string,
   required: true, - this is used so that no user can be stored in the database without a username
   unique: true - means no one can have the same username
   v. add a timestamp, time of creation of the user and time of update for the user, can be used to easily sort by time
   based on the schema created we set it to mongoose.schema, and we set the userSchema to "User" creating a function for it and exporting it.

7. creating a test Api route
   i. i.e api route app.get('/' req, res)
   request is the data we get from the client/browser side and response is the data we send back from the server side

now create a routes folder insise the api to test and create a file in it user.routes.js

inside the file i created first imported express then a router function. used 'router.get to get information e.g router.get('/test', (req, res) => {
res.json ({
message: 'hello world'
})
})

export default router

import it into the index.js file and call it

<!-- remeber in the router file there will be multiple routers, 'userRouter, listingRouter, singinRouter etc, so when importing use the name but it'll still point to the file direction e.g "import userRouter from "router/..." -->

app.use("/api/user", userRouter)
then check it in localhost to see if it works, localhost:3000/api/user/test

inside the api folder create a sub folder called controller, inside the controller folder, i created a file and inside the file i exported a test controller and imported it into user.routes

8. Creating the signup api route. getting information from the clinent like the username, email and password side and hashing the passwrod saving it in the database.
i. created a file in the routes folder, auth.route.js
<!-- to has password use bcryptjs -->

9. creating a middleware and a function to handle possible errors.
   created in the index,js inside the api folder

i. checks for 4 things, error sent to the middlewere, request from the client side, respose from the server to the clientside and next is to the next middleware
Also created a utils folder in the
9. signup page ui
10. signup page functionality