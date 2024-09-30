import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Overview from './pages/overview/Overview.jsx';
import NewPost from './pages/new-post/NewPost.jsx';
import Error404 from './pages/error/404/404.jsx';
import NavBar from './components/navBar/NavBar.jsx';
import data from './constants/data.json';
import { useState } from 'react';
import BlogPost from './components/blogPost/BlogPost.jsx';

function App() {
  const initialFormState = {
    'title': '', 'subtitle': '', 'author': '', 'message': '',
  };
  const [form, setForm] = useState(initialFormState);
  const [blogs, setBlogs] = useState(data);

  function changeForm(name, value) {
    setForm({...form, [name]: value});
  }

  function addBlog(event) {
    event.preventDefault();
    setBlogs({ ...blogs, form });
  }

  return (
    <>
      <header className="header-wrapper">
        <NavBar />
      </header>

        <main className="main-wrapper">
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/overview" element={<Overview blogs={blogs} />} />
              <Route path="/posts/:id" element={<BlogPost blogs={blogs} />} />
              <Route path="/new post"
                     element={<NewPost form={form}
                                       changeForm={() => changeForm}
                                       onSubmit={(event) => addBlog(event)} />} />
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
