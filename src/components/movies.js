import "./App.css";
import { useEffect } from "react";
import React, { useState } from "react";
import axios from "axios";



function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios("https://movies-list.herokuapp.com/api/movies")
      .then((response) => {
      console.log(response)
      setMovies(response.data)
      })
      
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1 className="Title">Movie List</h1>
      {movies.map((movie) => {
        return (
        <div>
          <h2 className="Movie_title">{movie.title}<br></br></h2>
          <img src={movie.image}/>
          <br></br><p></p>description: {movie.description}<br></br>
          <br></br>genre: {movie.genre}<br></br>
          <br></br>director: {movie.director}<br></br>
          <br></br>metascore={movie.metascore}<br></br>
          
        </div>
        )
      })}
    </div>
  );
}

export default App;

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function MediaCard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 140 }}
//         image="/static/images/cards/contemplative-reptile.jpg"
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }
