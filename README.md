<h1 align="center">GoKart - Online Shopping Website</h1>
<h2 align="center">
🌐 MERN Stack & Redux
</h2>
<p align="center">
MongoDB, Expressjs, Reactjs, Redux, Nodejs
</p>

> This project is a fullstack implementation in MongoDB, Expressjs, React/Redux, Nodejs.

<!-- Discover about different people by having a visit at this Instagram-Clone : 
https://instaclone2305.herokuapp.com/ -->


# Problem Statement

Dukaan Tech Track, where you can solve ANY problem of Indian Dukaandar using yourknowledge of ML, AI or any other technology and come up with an exciting solution that maysignificantly impact their lives. Don't miss out this amazing opportunity to solve real problems.
<br>

# Problems faced by Indian Dukaandars and their solutions

## PROBLEMS -

- Low-to-no income during lockdowns
- Unavailability of 24x7 services for the customers
- Mis-management during festive seasons due to large crowds
- Incapability of displaying all their products due to limited space
- Increased manforce to handle customers
- Limited reach of customers

## SOLUTIONS -

- During lockdown, people were obligated to stay indoors. This website can help consumers get the essential supplies at their doorsteps.
- 24x7 opportunity to shop online that saves time and effort
- No crowd gatherings and unusual battles for parking
- Multiple options and brands to display at a single place with a large volume of stock available online
- Reduces the need of large manforce
- Increases the reach of customers world-wide

Created an online shopping portal for Indian Dukandaars using MERN stack & Redux.

### Features:

- JWT user authetication
- Top products carousel
- Update user profile (username, email, password)
- Full featured shopping cart
- User profile with order details (product description, price, availability status)
- Checkout process (shipping, payment method, etc)
- Track placed order
- PayPal / credit card integration
- Mark orders as delivered option
- Database seeder (products & users)

One-stop solution for all your shopping problems amidst the pandemic, GoKart
<!-- https://instaclone2305.herokuapp.com/ -->


# About this project

### Frontend

In the frontend side, we have used React as the frontend library. We have used Redux for state management. We have also used React Bootstrap library for basic designing of the interface.

### Backend

For the backend side, we have used the Express library on top of Nodejs.  MongoDB is used as the NoSQL database to store our data as documents in JSON format. and mongoose to connect to our MongoDB database.

We have created REST APIs with Express and used these endpoints in the React frontend to interact with our backend part.


# Usage (run fullstack app on your machine)

## Prerequisites

### ES Modules in Node

-We have used ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.
-Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error
-You can also install and setup Babel if you would like

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@example.com (Admin)
123456

john@example.com (Customer)
123456

jane@example.com (Customer)
123456
```

# Screenshots of this project

<!-- User can sign in or sign up -->
<!-- ![User can sign in or sign up](https://github.com/riyajha2305/Instagram-Clone/blob/master/screenshots/1.png) -->

<!-- User visit Feed page -->
<!-- ![User visit Feed page](https://github.com/riyajha2305/Instagram-Clone/blob/master/screenshots/2.png) -->

<!-- User can go to his/her profile page
![User can go to his/her profile page](https://github.com/riyajha2305/Instagram-Clone/blob/master/screenshots/3.png) -->

<!-- User can visit other users profile and follow/unfollow
![User can visit other users profile and follow/unfollow](https://github.com/riyajha2305/Instagram-Clone/blob/master/screenshots/4.png) -->
