import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Image,Divider,Button } from 'antd';

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
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
            <Image
              width={300}
              height={450}
              alt="basic"
              src={movie?.image}
            />
        </div>
        <div className="col-md-8">
            
            <h1>{movie?.title}</h1>
            <Divider/>
            <h3>Director: {movie?.director}</h3>
            <p>{movie?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail;