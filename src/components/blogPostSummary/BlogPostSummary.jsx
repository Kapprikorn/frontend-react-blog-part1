import './BlogPostSummary.css';
import { useNavigate } from 'react-router-dom';

export default function BlogPostSummary({ blog }) {
  const navigate = useNavigate();

  return (
    <div className="blogpost-summary-wrapper" onClick={() => navigate(`/posts/${blog.id - 1}`)}>
      <h5>{blog.title}</h5>
      <p className="footnote">{blog.comments} reacties - {blog.shares} keer gedeeld</p>
    </div>
  )
}