import React, {useState, useEffect}from 'react';
import axios from 'axios';
const Home = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:7000/api/movies").then((resposne)=>{setMovies(resposne.data)}).catch(error=>{console.log(error)})
    }, [])
    return (
        <div>
            <div class="row">
                {movies.map((movie, index)=>(
                    <div class="col-sm-6">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">{movie.title}</h5>
                        <p class="card-text">Released on: {movie.year}</p>
                        <h6>Rating: {movie.ranking}</h6>
                      </div>
                    </div>
                    <br/>
                  </div>
                ))}
  
</div>
        </div>
    );
};

export default Home;