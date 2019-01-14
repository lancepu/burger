# Eat Da Burger

Simple web application utilizing MySQL database to store data, express for routing, and express-handlebars for views.

Enter in a burger name in the text box, your burger data will be stored in the database. Clicking on "DEVOUR!" button will move the burger to the left side of the screen

A demo version of the app has been deployed to Heroku (https://eat-da-burger-lp.herokuapp.com/)

To run the app locally:

1. Download or clone the repo
2. Run `schema.sql` and `seeds.sql` files in the `db` folder to set up the database with some dummy data
3. Fill in the database connection information in `connection.js` file in the `config` folder
4. Run `npm install`
5. Run `npm start` OR `node server.js`
6. Open your browser and go to `localhost:3000`, or whatever port you've set the App to listen on
