import './BlogPostSummary.css';
import { useNavigate } from 'react-router-dom';

export default function BlogPostSummary({ blog }) {
  const navigate = useNavigate();

  return (
    <div className="blogpost-summary-wrapper" onClick={() => navigate(`/posts/${blog.id - 1}`)}>
      <div className="card-header">
        <p className="blogpost-summary-title"><b>{blog.title}</b></p>
        <p>({blog.author})</p>
      </div>
      <p className="footnote">{blog.comments} reacties - {blog.shares} keer gedeeld</p>
    </div>
  );
}