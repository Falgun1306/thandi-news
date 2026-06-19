import { useState } from 'react'
import NavBar from './Components/NavBar'
import Categories from './Components/Categories'
import News from './Components/Pages/News'
import Footer from './Components/Footer'

function App() {


  return (
    <div>
      <NavBar className='sticky top-0 z-20'/>
      <Categories className='py-7 sticky top-14 z-10 bg-base-100'/>
      <News className='py-5'/>
      <Footer/>
    </div>
  )
}

export default App
