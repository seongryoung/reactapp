import React from "react";
import PropTypes from "prop-types";

function MakeMovie({id,year,title,summary,poster, genres}) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}/>
            <div className="movie_data">
                <h3 className="movie_title" style={{backgroundColor:"green"}}>{title}</h3>
                <h5>{year}</h5>
                <p>{summary}</p>
                <ul className="genres">
                    {genres.map((genre, idx) => (
                        <li key={idx} className="genre">{genre}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

MakeMovie.PropType = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default MakeMovie;