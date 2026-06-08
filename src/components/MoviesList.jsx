import CardComponent from "../components/CardComponent";
import React, { useEffect ,useState} from 'react'

const MoviesList = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Simulate an API call to fetch movies
        const fetchMovies = async () => {
            const response = await fetch('https://backend-crud-one.vercel.app/product');
            const data = await response.json();
            setMovies(data);
        };

        fetchMovies();
    }, [movies]);

  return (
    
    <div className="container mx-auto my-4">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            
            {movies.map((card, index) => (
                <div class="col" key={index}>
                    <CardComponent prod={card} />
                </div>
            ))}
        </div>
           
    </div>
  )
}

export default MoviesList;