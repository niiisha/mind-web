import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-[#C780FA] rounded-lg flex justify-between py-5 px-10 hover:bg-amber-700 hover:text-white'>
      <h1>Sample site</h1>

      <div className='space-x-5'>

      
      <NavLink to='/'>Home</NavLink>
      <NavLink to='detail/:id'>Detail</NavLink>

      <NavLink to='/about'>About</NavLink>
      <NavLink to='/contact'>Contact</NavLink>


      {/* <a href="">Home</a>
      <a href="">About</a>
      <a href="">Contact</a> */}
      </div>


    </div>
  )
}

export default Header
