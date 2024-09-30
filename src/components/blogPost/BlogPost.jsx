import './BlogPost.css';
import { useNavigate, useParams } from 'react-router-dom';
import toDateStringNL from '../../helpers/toDateStringNL.js';

export default function BlogPost({ blogs }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const blog = blogs[id];

  return (
    <div className="blogpost-wrapper">
      <h2>{blog.title}</h2>
      <h3>{blog.subtitle}</h3>
      <p>Geschreven door {blog.author} op {toDateStringNL(blog.created)}</p>
      <p>{blog.content}</p>
      <p className="footnote">{blog.comments} reacties - {blog.shares} keer gedeeld</p>
      <button onClick={() => navigate('/')}>Terug naar de overzichtspagina</button>
    </div>
  );
}