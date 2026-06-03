import CardComponent from "../components/CardComponent";
import React from 'react'

const MoviesList = () => {
  return (
    
    <div className="container mx-auto my-4">
        <div class="row row-cols-1 row-cols-md-3 g-4">

            {Array(10).fill(<CardComponent/>).map((card, index) => (
                <div class="col" key={index}>
                    {card}
                </div>
            ))}
        </div>
           
    </div>
  )
}

export default MoviesList;