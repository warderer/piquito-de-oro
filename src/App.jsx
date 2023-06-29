import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import RoutesIndex from './routes/RoutesIndex'

function App () {
  return (
    <>
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/piquito-de-oro/'}>
        <Header />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App
