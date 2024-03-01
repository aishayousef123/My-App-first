import React from 'react'
import Navbar from './components/navbar/Navbar'
import Slider from './components/slider/Slider'
import Newslider from './components/slider/MySwiper'

const App = () => {
  return (
    <div className='container'>
      <Navbar/>
      {/* <Slider/> */}
      <Newslider />
    </div>
  )
}

export default App