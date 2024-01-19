import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App, { loader as blogsLoader } from './routes/App.jsx'
import NewPost, { action as newPostAction } from './routes/NewPost.jsx'
import Author, { loader as authorBlogsLoader } from './routes/Author.jsx'
import './index.css'
import FullBlog, { loader as blogByIdLoader } from './routes/FullBlog.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App />, loader: blogsLoader },
  { path: '/create-post', element: <NewPost />, action: newPostAction },
  { path: '/:author', element: <Author />, loader: authorBlogsLoader },
  { path: '/blog/:id', element: <FullBlog />, loader: blogByIdLoader }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
