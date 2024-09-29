import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Overview from './pages/overview/Overview.jsx';
import NewPost from './pages/new-post/NewPost.jsx';
import Error404 from './pages/error/404/404.jsx';
import NavBar from './components/navBar/NavBar.jsx';

function App() {

  return (
    <>
      <NavBar />

      <main className="main-wrapper">
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/new post" element={<NewPost />} />
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
