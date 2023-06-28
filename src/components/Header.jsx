const Header = () => {
  // Simple Header de: https://getbootstrap.com/docs/5.0/examples/headers/
  return (
    <div className='header-container'>
      <div className='container'>
        <header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
          <a href='/' className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'>
            <svg className='bi me-2' width='40' height='32'><use xlinkHref='#bootstrap' /></svg>
            <span className='fs-4'>Piquito Dorado</span>
          </a>

          <ul className='nav nav-pills'>
            <li className='nav-item'><a href='/' className='nav-link active' aria-current='page'>Inicio</a></li>
            <li className='nav-item'><a href='/about' className='nav-link text-dark'>Acerca de</a></li>
            <li className='nav-item'><a href='/faq' className='nav-link text-dark'>Preguntas Frecuentes</a></li>
            <li className='nav-item'><a href='/contact' className='nav-link text-dark'>Contacto</a></li>
          </ul>
        </header>
      </div>
    </div>
  )
}
export default Header
