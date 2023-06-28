import { useState, useEffect } from 'react'
import ProductCard from '../components/productCard'
import SearchBar from '../components/SearchBar'

const Home = () => {
  const myRequest = new Request('../assets/lentes.json')
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    fetch(myRequest)
      .then((response) => response.json())
      .then((glasses) => setData(glasses))
  }, [])

  return (
    <div className='container'>
      <SearchBar handleSearchChange={handleSearchChange} />
      <div className='row'>
        {
            filteredData.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))
        }
      </div>
    </div>
  )
}
export default Home
