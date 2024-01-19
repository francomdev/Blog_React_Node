import { useLoaderData } from 'react-router-dom'
import Blog from './Blog'
export default function BlogsList({ search }) {
  const blogs = useLoaderData()
  return (
    <>
      {search.length === 0 &&
        blogs.map((blog) => (
          <Blog
            key={blog.id}
            id={blog.id}
            author={blog.author}
            date={blog.date}
            title={blog.title}
            body={blog.content}
          />
        ))}
      {search.length > 0 &&
        blogs
          .filter(
            (blog) =>
              blog.author.toLowerCase().includes(search.toLowerCase()) ||
              blog.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((blog) => (
            <Blog
              key={blog.id}
              id={blog.id}
              author={blog.author}
              date={blog.date}
              title={blog.title}
              body={blog.content}
            />
          ))}
    </>
  )
}
