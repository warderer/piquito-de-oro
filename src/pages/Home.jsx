import { useState, useEffect } from 'react'

const Home = () => {
  const myRequest = new Request('../assets/lentes.json')
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(myRequest)
      .then((response) => response.json())
      .then((glasses) => setData(glasses))
  }, [])

  return (
    <h1>Home</h1>
  )
}
export default Home
