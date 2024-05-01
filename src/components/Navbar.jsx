import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-600 text-white py-2'>
        <div className="logo">
            <span className='font-bold text-xl mx-9'>urTash</span>
        </div>
        <ul className='flex gap-9 mx-9'>
            <li className='cursor-pointer hover:font-bold transition-all duration-50'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-50'>Your Task</li>
            
        </ul>
    </nav>
  )
}

export default Navbar
