import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import {Routes, Route} from 'react-router-dom';
import Post from "./components/Post";
import Comments from "./components/Comments";
import Album from "./components/Album";
import Photos from "./components/Photos";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/:id/About" element={<About/>}></Route>
        <Route path="/:id/posts" element={<Post/>}></Route>
        <Route path="/:id/posts/:p_id/comments" element={<Comments/>}></Route>
        <Route path="/:id/albums" element={<Album/>}></Route>
        <Route path="/:id/albums/:a_id/photos" element={<Photos/>}></Route>
      </Routes>
    </>
  )
}

export default App;