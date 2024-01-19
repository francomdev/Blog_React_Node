import BlogModel from '../models/model.js'

export default class BlogController {
  static async getAll (req, res) {
    const blogs = await BlogModel.getAll()
    res.status(200).json(blogs)
  }

  static async getById (req, res) {
    const id = req.params.id
    const blog = await BlogModel.getById({ id })
    if (!blog) {
      return res.status(404).json({ message: 'Id not found' })
    }
    res.status(200).json(blog)
  }

  static async getByAuthor (req, res) {
    const author = req.params.author
    const blogsByAuthor = await BlogModel.getByAuthor({ author })
    if (!blogsByAuthor) {
      return res.status(404).json({ message: 'Author not found' })
    }
    res.status(200).json(blogsByAuthor)
  }

  static async create (req, res) {
    const content = req.body
    const newBlog = await BlogModel.create({ content })
    res.status(201).json(newBlog)
  }

  static async update (req, res) {
    const content = req.body
    const id = req.params.id
    const updatedBlog = await BlogModel.update({ id, content })
    if (!updatedBlog) {
      res.status(404).json({ message: 'id not found' })
    }
    res.status(200).json(updatedBlog)
  }

  static async delete (req, res) {
    const id = req.params.id
    const deleted = await BlogModel.delete({ id })
    if (!deleted) {
      res.status(404).json({ message: 'id not found' })
    }
    res.status(200).json({ message: 'Blog post deleted' })
  }
}
