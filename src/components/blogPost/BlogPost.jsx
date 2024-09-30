import './BlogPost.css';
import { useNavigate, useParams } from 'react-router-dom';
import toDateStringNL from '../../helpers/toDateStringNL.js';

export default function BlogPost({ blogs }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const blog = blogs[id];

  return (
    <div className="blogpost-wrapper">
      <h1>{blog.title}</h1>
      <h2>{blog.subtitle}</h2>
      <p>Geschreven door {blog.author} op {toDateStringNL(blog.created)}</p>
      <p className="footnote">🕒 {blog.readTime} minuten lezen</p>
      <p>{blog.content}</p>
      <p className="footnote">{blog.comments} reacties - {blog.shares} keer gedeeld</p>
      <button className="btn-return"
              onClick={() => navigate('/Overview')}>
        Terug naar de overzichtspagina
      </button>
    </div>
  );
}