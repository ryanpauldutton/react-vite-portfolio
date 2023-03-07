import './App.css'
import Navbar from './components/navbar'
import Contact from './pages/contact'
import About from './pages/about'
import Home from './pages/home'
import Projects from './pages/projects'
import { Route, Routes } from 'react-router-dom'


const App = () => {
return (
  <>
    <Navbar />
    <div className='container full'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
     
    </div>
  </>
)
}

export default App
