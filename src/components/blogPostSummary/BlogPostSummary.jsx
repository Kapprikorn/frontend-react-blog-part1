import './BlogPostSummary.css';

export default function BlogPostSummary({ blog }) {
  return (
    <div className="blogpost-summary-wrapper">
      <h5>{blog.title}</h5>
      <p className="footnote">{blog.comments} reacties - {blog.shares} keer gedeeld</p>
    </div>
  )
}