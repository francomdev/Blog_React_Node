import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import classes from './FullBlog.module.css'
export default function FullBlog() {
  const blog = useLoaderData()

  return (
    <>
      <Nav search={false} />
      <main>
        <div className={classes.container}>
          <div className={classes.title}>
            <Link className={classes.author} to={'/' + blog.author}>
              {blog.author}
            </Link>
            <p>{blog.date}</p>
          </div>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      </main>
    </>
  )
}

export async function loader({ params }) {
  const response = await fetch('http://localhost:3000/' + params.id)
  const data = await response.json()
  return data
}
