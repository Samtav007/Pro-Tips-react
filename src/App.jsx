import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Nav from './Components/Pages/Navbar';
import About from './Components/Pages/Registration';
import Contacts from './Components/Pages/Contactpage';
import Home from './Components/Pages/Homepage';


function App() {

  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/contactpage' element={<Contacts/>}></Route>
    <Route path='/aboutpage' element={<About/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App