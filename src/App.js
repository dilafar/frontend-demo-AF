import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Notice from './pages/notice';
import Product from './pages/product';

const App = () => {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
        
          <Route path='/' element={<Home/>}/>
          <Route path='/notice' element={<Notice/>}/>
          <Route path='/product' element={<Product/>}/>
        </Routes>
      </Router>

    </div>
  )
}

export default App