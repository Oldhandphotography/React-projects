import React ,{ Component, useState,useEffect} from "react";
import './App.css';
import Videos from './Video.js';
import Axios from "./axios";
function App() {
  const [videos,setVideos]= useState([]);
  useEffect(()=>{
    async function fetchPost(){
      const response = await Axios.get('/v2/posts');
      setVideos(response.data);
      return response;
    }
    fetchPost();
  },[]);
  console.log(videos);
  return (
    <div className="App">
      <div className="app-videos">
        <Videos />
      </div>
    </div>
  );
}

export default App;
