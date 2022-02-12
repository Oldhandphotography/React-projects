import React,{useState} from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';
import Post from "./Post.js"
function App() {
  const[post,setPost] = useState([
   { username:"Souvik",
    caption:"This is my first post",  
    imageUrl:"https://cdn.pixabay.com/photo/2017/01/31/23/42/animal-2028258__340.png"},{
       username:"Souvik",
    caption:"This is dog post",  
    imageUrl:"https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__340.jpg"
    },
    {
      username:"Souvik",
      caption:"This is cat post",  
      imageUrl:"https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg"
    }
  ]);
  return (
    <div className="App">
      
      {/* <h2>hello this is instagram clone</h2> */}
      <div className="app_header">
        <img src="https://i.pinimg.com/originals/72/9f/77/729f7798561be2cb67f39e916a22eb6a.png" alt="" className="app_headerImage" />
        <h2 className="insta">Instagram</h2>
      </div>
      {
        post.map(post => <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />)
      }
      {/* <Post username="Souvik" caption="he is boy" imageUrl="https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__340.jpg"/>

      <Post username="Souvik" caption="he is cat" imageUrl="https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg"/> */}
      {/* header */}
      {/* posts */}
      {/* posts */}
    </div>
  );
}

export default App;
