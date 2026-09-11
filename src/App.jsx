import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import BestSells from './pages/BestSells'
import AllProducts from './pages/AllProducts'
import LogIn from './pages/LogIn'
import Navbar from './components/NavBar'
import Cart from './pages/Cart'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <main className='bg-[#EAEDED] min-h-screen flex flex-col text-[#0F1111] font-sans antialiased'>
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/bestsells' element={<BestSells />} />
            <Route path='/allproducts' element={<AllProducts />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<LogIn />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </>
  )
}

export default App
