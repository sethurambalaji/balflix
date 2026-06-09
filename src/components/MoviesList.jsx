import { NavLink } from "react-router-dom";
import CardComponent from "../components/CardComponent";
import React, { useEffect ,useState} from 'react'

const MoviesList = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        
        const fetchMovies = async () => {
            const response = await fetch('https://backend-crud-one.vercel.app/product');
            const data = await response.json();
            setMovies(data);
        };

        fetchMovies();
    }, [movies]);

  return (
    
    <div className="container mx-auto background-gray-100 p-4">
        <div className="row row-cols-1 row-cols-md-4 g-4 d-flex flex-wrap align-items-start" style={{ marginTop: '10px' }}>
            
            {movies.map((card, index) => (
                <div className="col" key={index}>
                        <CardComponent prod={card} className="border-solid border-5"/>
                </div>
            ))}
        </div>
           
    </div>
  )
}

export default MoviesList;