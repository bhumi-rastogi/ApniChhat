import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Property from './pages/Property'
import { Routes, Route } from 'react-router-dom'
import Calculator from './pages/Calculator'
import  Signup from './pages/Signup'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/property' element={<Property/>}/>
      <Route path='/calculator' element={<Calculator/>}/>
      <Route path='signup' element={<Signup/>}/>
    </Routes>
    </>
  )
}

export default App
