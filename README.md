# Meta Movie Review #

## About ##

Meta Movie Review is a react-node application which enables you to add movie so that they can be reviewed according to the meta_score. 
The client-side is built using react for best user interface and it also provides a form where user can add a new movie.
The server-side is built using nodejs and express. I also used postgresql as the database and knex as the query builder.

## Technologies ## 

### client-side ###
* [React](https://www.npmjs.com/package/react)

### server-side ###
* [postgres](https://www.npmjs.com/package/pg)
* [express](https://www.npmjs.com/package/express)
* [nodejs](https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/)
* [knex](https://www.npmjs.com/package/knex)
* [dotenv](https://www.npmjs.com/package/dotenv)

## API's ##

Methods |   Urls                      | Actions
--------| ----------------------------| ---------
GET     | {url}/                      | Fetch all movies from the database
GET     | {url}/:movieId              | Fetch movie by movieId from the database
POST    | {url}/add-movie             | Create movies and adds them to the database
DELETE  | {url}/delete-movie/:movieId | Delete movie by movieId from the database
PUT     | {url}/update-movie          | Update movie in the database

## Author ##

[John Katua](https://www.linkedin.com/in/johnkatua/)
