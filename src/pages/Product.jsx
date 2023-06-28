import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const myRequest = new Request('../assets/lentes.json')
  const [product, setProduct] = useState({})
  const productId = useParams().id

  useEffect(() => {
    fetch(myRequest)
      .then((response) => response.json())
      .then((glasses) => {
        const product = glasses.find((item) => item.id === productId)
        setProduct(product)
      })
  }, [productId])

  if (!product) {
    return <div>Error: Producto no encontrado</div>
  }

  const { title, description, url, price } = product

  return (
    <div>
      <h2>{title}</h2>
      <img className='w-25' src={`/assets/img/${url}`} alt={title} />
      <p>{description}</p>
      <p>Precio: ${price}</p>
    </div>
  )
}
export default Product
