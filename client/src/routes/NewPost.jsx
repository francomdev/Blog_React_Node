import { Link, Form, redirect } from 'react-router-dom'
import classes from './NewPost.module.css'

function NewPost() {
  return (
    <main className={classes.mainContainer}>
      <Form method="post" className={classes.container}>
        <label className={classes.label} htmlFor="title">
          Title
        </label>
        <input className={classes.title} type="text" name="title" id="title" />
        <label className={classes.label} htmlFor="author">
          author
        </label>
        <input
          className={classes.title}
          type="text"
          name="author"
          id="author"
        />
        <label className={classes.label} htmlFor="content">
          Body
        </label>
        <textarea
          className={classes.content}
          name="content"
          id="content"
          cols="30"
          rows="10"
        ></textarea>
        <div className={classes.buttons}>
          <button className={classes.button}>Submit</button>
          <Link className={classes.cancel} to="/">
            Cancel
          </Link>
        </div>
      </Form>
    </main>
  )
}

export default NewPost

export async function action({ request }) {
  const formData = await request.formData()
  const postData = Object.fromEntries(formData)
  await fetch('http://localhost:3000/', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-type': 'application/json'
    }
  })
  return redirect('/')
}
