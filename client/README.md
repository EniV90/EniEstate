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
