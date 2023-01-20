import React from 'react'
import Link from 'next/link'
import Search from './Search'

function Header() {
  return (
    <header className='flex flex-col md:flex-row justify-between px-2 shadow-md items-center'>
      <div className='text-red-500 font-bold text-2xl p-2 uppercase'>
        <Link href='/'>DJ Events</Link>
      </div>
      <Search/>
      <nav>
        <ul className='flex items-center'>
            <li className='p-2 font-medium text-slate-500 duration-200 hover:text-black'>
                <Link href='/events'>Events</Link>
            </li>

            <li>
              <Link href='/events/add' className='text-white bg-blue-500 p-2 rounded-md shadow-md'>Add Event</Link>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
