import logo from './logo.svg';
import './App.css';
import Footer from './Footer'; // Footer.js
// import Create from './Create'; //Create.j
import React, { useEffect, useState } from "react";
import Nav from './Nav'; // Import your Nav component
import axios from 'axios';
// import RoutedApp from './Routes'; // Import your routing component


function App() {

  const [posts, setPosts] = useState([]);
  const fetchPosts = () => {
    axios
      .get('http://localhost:8000/api/posts')
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching:', error);
      });
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div className="App">
          <Nav />
          {Array.isArray(posts) ? (
            posts.map((post, i) => (
              <div key={i}>
                <h2>{post.title}</h2>
                <p>{post.slug}</p>
                <p>{post.content}</p>
              </div>
            ))
          ) : (
            <p>No posts available</p>
          )}
        </div>



        <Footer />
      </header>
    </div>
  );
}

export default App;