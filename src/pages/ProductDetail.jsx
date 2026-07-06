import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const[movie,setMovie]=useState();
  const{id}=useParams();
  
  useEffect(() => {
    const fetchData = async() => {
      try{
        const response = await axios.get(`https://backend-crud-one.vercel.app/product/${id}`);
        setMovie(response.data);
      }
      catch(error){
      console.error('Error fetching movie:', error);
    }
    }
    fetchData();
  },movie);
  
  return (
    <div>
        <h1>Movie Name: {movie?.title}</h1>
    </div>


  )
}

export default ProductDetail;