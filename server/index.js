import express from 'express'
import cors from 'cors'
import blogRouter from './routes/routes.js'

const app = express()
app.use(express.json())
app.use(cors())
app.disable('x-powered-by')
const PORT = process.env.PORT || 3000

app.use('/', blogRouter)

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
