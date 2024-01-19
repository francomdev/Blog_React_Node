import blogs from '../blog.js'

export default class BlogModel {
  static async getAll () {
    return blogs
  }

  static async getById ({ id }) {
    const idx = blogs.findIndex(blog => blog.id === id)
    if (idx < 0) {
      return null
    }
    return blogs[idx]
  }

  static async getByAuthor ({ author }) {
    const blogsByAuthor = blogs.filter(blog => blog.author.toLowerCase() === author.toLowerCase())
    if (blogsByAuthor.length === 0) {
      return null
    }
    return blogsByAuthor
  }

  static async create ({ content }) {
    const newBlog = {
      id: (blogs.length + 1).toString(),
      ...content,
      date: new Date().toLocaleDateString()
    }
    blogs.unshift(newBlog)
    return newBlog
  }

  static async update ({ id, content }) {
    const idx = blogs.findIndex(blog => blog.id === id)
    if (idx < 0) {
      return null
    }
    const updatedBlog = {
      ...blogs[idx],
      ...content
    }
    blogs[idx] = updatedBlog
    return updatedBlog
  }

  static async delete ({ id }) {
    const idx = blogs.findIndex(blog => blog.id === id)
    if (idx < 0) {
      return false
    }
    blogs.splice(idx, 1)
    return true
  }
}
