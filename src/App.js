import React from 'react'
import Content from './Components/Content'
import Header from './Components/Header'
import Leftnav from './Components/Leftnav'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Header/>
      <div className='flex space-x-5'>
      <Leftnav/>
      <Content/>
      </div>
      <Footer/>
      
    </div>
  )
}

export default App
