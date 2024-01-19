import { useState } from 'react'
import Nav from '../components/Nav'
import BlogsList from '../components/BlogsList'
function App() {
  const [search, setSearch] = useState('')

  function searchHandler(event) {
    event.preventDefault()
    const data = event.target.value
    setSearch(data)
  }

  return (
    <>
      <Nav search={true} onSearch={searchHandler} />
      <main>
        <BlogsList search={search} author={''} />
      </main>
    </>
  )
}

export default App

export async function loader() {
  const response = await fetch('http://localhost:3000/')
  const data = await response.json()
  return data
}
