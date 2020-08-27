# Friend-CRUD
 A simple CRUD application built with GraphQL and Mongoose to model the data.

## Installation

After installing and extracting the .zip file, make sure to open the directory containing the `package.json` and run the following command:
```
npm install
```
This will install all the `node_modules` that the application requires.

### Robo 3T Installation

We will be using Robo 3T, which is a cross-platform MongoDB manager. 

Download the latest version from [Robo 3T](https://robomongo.org/download) website. Studio 3T is not necessary, Robo 3T will suffice for this application.

Once we install and open Robo 3T, we will have to click *Create*. Now we can accept the default configurations and click on *Save*.

Now if we click on *Connect*, we have a local connection setup for our application.

## Usage

### Commands:
Provide the following command on the terminal from the directory containing the `package.json` file:
```
npm start
```

Now if you open [`http://localhost:8080/`](http://localhost:8080/), we should be able to see GraphiQL which is GraphQL's own integrated development environment (IDE) per say. There you go.

## Sample Queries Mutations

###Create
![](https://raw.githubusercontent.com/Kishore-Elangovan/Friend-CRUD/master/diagrams/createFriend.png)

###Read
![](https://raw.githubusercontent.com/Kishore-Elangovan/Friend-CRUD/master/diagrams/getOneFriend.PNG)

###Update
![](https://raw.githubusercontent.com/Kishore-Elangovan/Friend-CRUD/master/diagrams/updateFriend.PNG)

###Delete
![](https://raw.githubusercontent.com/Kishore-Elangovan/Friend-CRUD/master/diagrams/deleteFriend.png)
