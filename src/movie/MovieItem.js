import React from 'react'
import './style.css';
function MovieItem({item}) {

  const baseurl = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="card col-lg-3 movieCard">
      <img src={`${baseurl}${item.poster_path}`} className='img-fluid' alt='img' />
      <div className="card-body">
        <h3>Rating:{item.vote_average}</h3>

      </div>
    </div>
  )
}

export default MovieItem