import { HashRouter } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/footer.jsx'
import './index.css'
import Router from './pages/Router.jsx'
function App() {

  return (
    <HashRouter>
      <Navbar />
      <Router />
      <Footer />
    </HashRouter>
  )
}

export default App
