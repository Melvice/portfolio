import React from 'react'
// images
import logo from '../assets/logo-no-background.svg'
const Header  = () => {
    return (
      <div className = 'py-8'>
        <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
          <a href='#'>
            <img src= {logo} alt='logo' className='w-28'/>
          </a>
        {/**button */}
        <button className='btn btn-sm'> Work with me</button>
        </div>
        </div>
        </div>
    )
}

export default Header;
