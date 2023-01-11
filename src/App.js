import {useState, useEffect} from 'react';
//f02612c0
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
const API_URL = 'https://www.omdbapi.com?apikey=f02612c0';

const movie1 = { // use this as a static data just to render out sth 
    "Title": "Spiderman",
    "Year": "1990",
    "imdbID": "tt0100669",
    "Type": "movie",
    "Poster": "N/A"
}


const App = ()=> {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async (title) => {
        const response = await fetch (`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }


    useEffect(()=>{
        searchMovies("Spiderman");

    },[]);

    return(
        <div className='app'>
            <h1> MovieLand</h1>

            <div className='search'>
                <input 
                placeholder='Search for Movies'
                value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)}/>

                <img
                 src={ SearchIcon  }
                 alt="Search"
                 onClick={()=>{ searchMovies(searchTerm)}}
                 />
            </div>

            {
                movies?.length >0 
                ?(
                    <div className="container">
                        {
                            movies.map((movie) => (
                                <MovieCard movie = {movie} />
                            ))
                        }
                     </div>
                ) : (
                    <div className='empty'>
                        <h2> No movies Found</h2> 
                    </div>
                )
            }
        </div>
    );
}
export default App;