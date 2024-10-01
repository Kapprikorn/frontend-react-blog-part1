import './Overview.css';
import BlogPostSummary from '../../components/blogPostSummary/BlogPostSummary.jsx';

export default function Overview({ blogs }) {
  return (
    <>
      <h1>Bekijk de {blogs.length} blog posts op dit platform</h1>

      <div className="blogpost-list-wrapper">
        {
          blogs.map(blog => <BlogPostSummary key={blog.title} blog={blog} /> )
        }
      </div>
    </>
  )
}