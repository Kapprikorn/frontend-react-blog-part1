import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Overview from './pages/overview/Overview.jsx';
import NewPost from './pages/new-post/NewPost.jsx';
import Error404 from './pages/error/404/404.jsx';
import NavBar from './components/navBar/NavBar.jsx';
import data from './constants/data.json';
import { useState } from 'react';
import BlogPost from './components/blogPost/BlogPost.jsx';

function App() {
  const navigate = useNavigate();
  const initialFormState = {
    title: '',
    subtitle: '',
    author: '',
    content: '',
  };
  const [form, setForm] = useState(initialFormState);
  const [blogs, setBlogs] = useState(data);

  function changeForm(name, value) {
    setForm({ ...form, [name]: value });
  }

  function addBlog(event) {
    event.preventDefault();
    const newBlog = {
      id: blogs.length + 1,
      title: form.title,
      subtitle: form.subtitle,
      content: form.content,
      author: form.author,
      created: new Date().toISOString(),
      readTime: Math.ceil(form.content.split(' ').length / 333),
      comments: 0,
      shares: 0,
    };
    // show
    console.log('New Blog Post:', newBlog);
    setBlogs([ ...blogs, newBlog ]);
    setForm(initialFormState);
    navigate(`/posts/${newBlog.id - 1}`);
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
                                     changeForm={ (name, value) => changeForm(name, value) }
                                     onSubmit={ (event) => addBlog(event)} /> } />
            <Route path="*" element={<Error404 />} />
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
