import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Overview from './pages/overview/Overview.jsx';
import NewPost from './pages/new-post/NewPost.jsx';
import Error404 from './pages/error/404/404.jsx';
import NavBar from './components/navBar/NavBar.jsx';
import Post from './pages/post/Post.jsx';
import data from './constants/data.json';
import { useState } from 'react';

function App() {
  const [blogs, setBlogs] = useState(data);


  return (
    <>
      <NavBar />

      <main className="main-wrapper">
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/overview" element={<Overview blogs={blogs} />} />
            <Route path="/new post" element={<NewPost />} />
            <Route path="/posts/:id" element={<Post />} />
            <Route path="/404" element={<Error404 />} />
          </Routes>
        </div>
      </main>

      <footer className="footer-wrapper">
        <div className="footer-content">

        </div>
      </footer>
    </>
  );
}

export default App;
