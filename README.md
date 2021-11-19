# Little Japan Store
## Project Overview

Welcome to My Store project. In this project we will see the continuation of my last Project Storefront-Backend but now I create the front=end with Angular for my store project, this Front-end just calls the same API that was created using Node.jS, Typescript, and Express before.

The purpose of this project it's to create all the front functionality like displaying some products, updating the view when adding products to the cart and as well when removing some. Everything it's connected to a PostgresSQL Database on Docker but it only calls the a few API endpoints for the moment.

- `products` [GET] - Index 
- `products/:id` [GET] - Show
- `top-products` [GET] - [OPTIONAL] Top 5 most popular products 

The next step it's to update the API as well as the front-end to have a loggin system working with Oauth2, as well as creating orders, and create a registration on PostgresSQL.

## Project Instructions

For this Project to work first you will need to have the backend API on and working, you can download and follow the installation instructions on my Repo:
https://github.com/Flatcova/StorefrontBackendAPI-Udacity.git

Once you have everything set up and working, now we can start with the Angular Front-end.
``(Notice: the API was changed so we can create create new Products without a Token and also by doing the initial db-migrate up, you will already have 7 products to test)``

### Instructions

1. Clone the repository and navigate to the downloaded folder.

```
git clone https://github.com/Flatcova/MyStore-Udacity.git
cd MyStore-Udacity
```

2. Intall all both devDependencies, and dependencies from package.json by just writing on your terminal
```
npm i
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.1. so if you haven't install Angular CLI use the link provided. or just write the next commad:

```
npm i -g @angular/cli
```

### Create Postgres DB with Docker

3. Once you already clone the repo and install the dependencies, it's time to run the project by simply writting the command: 

```
ng serve
```

Once you run this command, you will se that the project it's visible on port ``4200``, also don't forget that before this you need to have the Backend-API running
Open your browser on ``localhost:4200`` to see if your project it's running correctly also you can see the console response when the project it's up and running.

## HURRAYYY!!

Well, that was much work for just initiating the project, but now it's time to see how it works. and please enjoy the website. I really hope you like it.