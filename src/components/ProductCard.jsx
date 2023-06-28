import { FaWhatsapp } from 'react-icons/fa'

const ProductCard = ({ id, title, description, url, price, quantity }) => {
  // Si tengo 0 unidades, el producto está agotado, por lo que le aplico un filtro de escala de grises
  const grayscale = quantity === 0 ? { filter: 'grayscale(100%)' } : {}

  // Si tengo 0 unidades, el producto está agotado, en caso contrario, está disponible
  const availabilityText = quantity === 0 ? 'Agotado' : 'Disponible'

  // Si tengo 0 unidades, el producto está agotado, por lo que le aplico una clase de CSS que lo indique, en caso contrario, aplico otra clase por que está disponible
  const availabilityClassName = quantity === 0 ? 'availability-tag out-of-stock' : 'availability-tag'

  const handleWhatsAppClick = () => {
    const message = `¡Hola! Estoy interesado/a en el producto "${title}". ¿Todavía está disponible?`
    const phoneNumber = '1234567890' // Coloca aquí el número de teléfono de WhatsApp

    const encodedMessage = encodeURIComponent(message)
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`

    window.open(whatsappURL)
  }

  // d-flex y align-items-stretch son clases de Bootstrap que permiten que la altura de las tarjetas sea igual
  return (
    <div className='col-md-3 my-3 d-flex align-items-stretch'>
      <div className='card'>
        <a href={`/product/${id}`}>
          <div className='image-container'>
            <img className='product-image' src={`/assets/img/${url}`} alt={title} style={grayscale} />
            <div className={availabilityClassName}>{availabilityText}</div>
          </div>
        </a>
        <div className='card-body d-flex flex-column justify-content-between'>
          <div>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{description}</p>
          </div>

          <div className='mx-auto mt-3'>
            <p className='card-price'>${price}</p>
            <button className='whatsapp-button' onClick={handleWhatsAppClick}>
              <FaWhatsapp />
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductCard
