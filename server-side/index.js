const express = require('express');
const cors = require('cors');
const knex = require('knex');
require('dotenv').config();

const db = knex({
  client: 'pg',
  connection: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
  }
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// cors makes sure we don't error  while trying to access routes from the client side or different server location
app.use(cors());

// GET: Fetch all movies from the database
app.get('/', (req, res) => {
  db.select('*')
    .from('movies')
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

// GET: Fetch movie by movieId from the database 
app.get('/:movieId', (req, res) => {
  const movieId = req.params.movieId;
  db.select('*')
    .from('movies')
    .where('movie_id', '=', movieId)
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

// POST: create movies and add the to the database
app.post('/add-movie', (req, res) => {
  const { movieName, imgUrl, releaseYear, summary, director, genre, rating, movieRuntime, metaScore } = req.body;
  db('movies')
    .insert({
      movie_name: movieName,
      img_url: imgUrl,
      release_year: releaseYear,
      summary: summary,
      director: director,
      genre: genre,
      rating: rating,
      movie_runtime: movieRuntime,
      meta_score: metaScore
    })
    .then(() => {
      console.log('Movie Added Successfully');
      return res.redirect('http://localhost:3000')
    })
    .catch((error) => {
      console.log(error);
    })
});

// DELETE: Delete movie by movieId from the database
app.delete('/delete-movie/:movieId', (req, res) => {
  const movieId = req.params.movieId;
  // const movieIdToDelete = Number(movieId.movieId);
  console.log(movieId);
  db('movies')
    .where('movie_id', '=', movieId)
    .del()
    .then(() => {
      console.log('Movie deleted successfully');
      return res.json({ msg: 'Movie deleted successfully' })
    })
    .catch((error) => {
      console.log(error);
    })
});

// PUT: update movie by movieId from the database
app.put('/update-movie', (req, res) => {
  db('movies')
    .where('movie_id', '=', 1)
    .update({ movie_name: 'Goldeneye' })
    .then(() => {
      console.log('Movie Updated Successfully');
      return res.json({ msg: 'Movie Updated Successfully' });
    })
    .catch((error) => {
      console.log(error);
    })
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on ${port}, http://localhost:${port}`)
})