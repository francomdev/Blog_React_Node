import { useState } from 'react'
import Nav from '../components/Nav'
import BlogsList from '../components/BlogsList'
export default function Author() {
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
        <BlogsList search={search} />
      </main>
    </>
  )
}

export async function loader({ params }) {
  const response = await fetch('http://localhost:3000/author/' + params.author)
  const data = await response.json()
  return data
}
