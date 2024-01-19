import { Router } from 'express'
import BlogController from '../controlers/controller.js'

const router = Router()

router.get('/', BlogController.getAll)
router.post('/', BlogController.create)

router.get('/:id', BlogController.getById)
router.patch('/:id', BlogController.update)
router.delete('/:id', BlogController.delete)

router.get('/author/:author', BlogController.getByAuthor)

export default router
