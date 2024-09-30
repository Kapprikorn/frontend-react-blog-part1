import './Overview.css';
import BlogPostSummary from '../../components/blogPostSummary/BlogPostSummary.jsx';

export default function Overview({ blogs }) {
  return (
    <>
      <h1>Overview</h1>
      <p>Aantal blogposts: {blogs.length}</p>

      <div className="blogpost-list-wrapper">
        {
          blogs.map(blog => {
            return <BlogPostSummary key={blog.title} blog={blog} />
          })
        }
      </div>
    </>
  )
}