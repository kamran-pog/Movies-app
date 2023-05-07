import "./App.css";
import { useEffect } from "react";
import React, { useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import { CardContent, CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Rating from "@mui/material/Rating";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios("https://movies-list.herokuapp.com/api/movies")
      .then((response) => {
        console.log(response);
        setMovies(response.data);
      })

      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1 className="Title">Movie List</h1>

      <div className="card card2">
        {movies.map((movie) => {
          return (
            <div className="card" key={movie.id}>
              <Card sx={{ maxWidth: 350 }}>
                <div>
                  <div className="img">
                    <CardMedia>
                      <img src={movie.image} alt={movie.title} />
                    </CardMedia>
                  </div>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {movie.title}
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                      {movie.description}
                    </Typography> */}
                     
                      <Typography variant="caption" display="block" gutterBottom>
                        Genre: <em>{movie.genre}</em>
                      </Typography>
                      <Typography variant="caption" display="block" gutterBottom>
                        Director: <em>{movie.director}</em>
                      </Typography>
                      
                      <Rating
                        Rating
                        name="half-rating"
                        defaultValue={movie.metascore}
                        precision={0.5}
                        readOnly
                      />
                      <CardActions>
                        <Button size="small">Edit</Button>
                        <Button size="small">Remove</Button>
                        <Button size="small">Description</Button>
                      </CardActions>
                  
                  </CardContent>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
