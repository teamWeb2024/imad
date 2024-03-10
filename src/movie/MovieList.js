import React, { useEffect, useState } from 'react'
import MovieItem from './MovieItem';
import axios from 'axios';

const MovieList = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
      const key ="2c2ff111934687367af0997b76d1507c";

    const getMovieData = async()=>{
    const res = await axios.get(`https:api.themoviedb.org/3/trending/all/day?api_key=${key}`);;
    setItems(res.data.results)
  };
  getMovieData();
  }, [])
  
  


  
  return (
    <div>
        <div className="container">
            <div className="row">
              {items.map((item)=>(
                <MovieItem key={item.id} item={item}/>
              ))}
                
            </div>
        </div>
    </div>
  )
}

export default MovieList