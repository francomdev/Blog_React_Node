import { Link } from 'react-router-dom'
import classes from './Nav.module.css'
export default function Nav({ search, onSearch }) {
  return (
    <>
      <nav className={classes.nav}>
        <Link to="/" className={classes.title}>
          <h1>My Blogs</h1>
        </Link>
        {search && (
          <input
            className={classes.search}
            type="search"
            name="search"
            id="search"
            placeholder="Search"
            onChange={onSearch}
          />
        )}
        <Link to="/create-post" className={classes.newBlogButton}>
          New Blog
        </Link>
      </nav>
    </>
  )
}
