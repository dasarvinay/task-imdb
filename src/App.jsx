
import React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/header/Header"; 
import Home from "./MovieDetails/Homepage/Home"; 
import MovieList from "./Components/Movielist/MovieList"; 
import Movie from "./MovieDetails/Homepage/Moviedetails/Movie"; 
import "./App.css"
const App = () => {
  return (
    <div className="App">
      <Header />
      <Container> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:type" element={<MovieList />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="/*" element={<h1>Error Page</h1>} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;







