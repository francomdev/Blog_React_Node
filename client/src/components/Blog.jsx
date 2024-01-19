import { Link } from 'react-router-dom'
import classes from './Blog.module.css'
export function Blog({ id, author, date, title, body }) {
  return (
    <Link to={'/blog/' + id} className={classes.container}>
      <div className={classes.title}>
        <Link className={classes.author} to={'/' + author}>
          {author}
        </Link>
        <p>{date}</p>
      </div>
      <h2>{title}</h2>
      <p>{body.slice(0, 500) + ' ...'}</p>
    </Link>
  )
}

export default Blog
