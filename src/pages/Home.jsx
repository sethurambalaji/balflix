import React from 'react'
import Navbar from '../components/common/Navbar';
import MoviesList from '../components/MoviesList';
import BackgroundColor from '../context/Style';

const Home = () => {

  const { backgroundImages } = React.useContext(BackgroundColor);
  return (
    <div style={{ background: backgroundImages, minHeight: '100vh' }}>
     <Navbar />
     <MoviesList />
    </div>
  )  
}

export default Home;