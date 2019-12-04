import React from 'react';
import axios from 'axios'; 
import MakeMovie from './Movie';
import "./App.css"

class App extends React.Component{
  state = {
    isloading : true,
    movies : {}
  }
 
  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get('https://yts-proxy.now.sh/list_movies.json&sort_by');
    this.setState({isloading : false, movies : movies})
  }

  componentDidMount = () => {
    this.getMovies();    
  }

  render(){
    const {isloading, movies} = this.state;
    return(
      <section className="container">
        {
          isloading ? 
          <div className="loading">
            <span className="spantext_loder">is loading...</span>
          </div> :(
            <div className="movies">
              {movies.map(movie => (
                <MakeMovie 
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              ))}
            </div>            
          )
        }
      </section>
    )
  }
}
 
export default App;