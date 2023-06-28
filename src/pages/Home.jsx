import { useState, useEffect } from 'react'
import ProductCard from '../components/productCard'

const Home = () => {
  const myRequest = new Request('../assets/lentes.json')
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(myRequest)
      .then((response) => response.json())
      .then((glasses) => setData(glasses))
  }, [])

  return (
    <div className='container'>
      <div className='row'>
        {
            data.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))
        }
      </div>
    </div>
  )
}
export default Home
