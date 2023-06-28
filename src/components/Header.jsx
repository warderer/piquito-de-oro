import { NavLink } from 'react-router-dom'

const Header = () => {
  // Simple Header de: https://getbootstrap.com/docs/5.0/examples/headers/
  return (
    <div className='header-container'>
      <div className='container'>
        <header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
          <NavLink to='/' className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'>
            <svg className='bi me-2' width='40' height='32'><use xlinkHref='#bootstrap' /></svg>
            <span className='fs-4'>Piquito Dorado</span>
          </NavLink>

          <ul className='nav nav-pills'>
            <li className='nav-item'>
              <NavLink to='/' className='nav-link active' aria-current='page'>Inicio</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/about' className='nav-link text-dark'>Acerca de</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/faq' className='nav-link text-dark'>Preguntas Frecuentes</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/contact' className='nav-link text-dark'>Contacto</NavLink>
            </li>
          </ul>
        </header>
      </div>
    </div>
  )
}
export default Header
