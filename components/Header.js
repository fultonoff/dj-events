import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className='flex flex-col md:flex-row justify-between px-2 shadow-md items-center'>
      <div className='text-red-500 font-bold text-2xl p-2 uppercase'>
        <Link href='/'>DJ Events</Link>
      </div>

      <nav>
        <ul>
            <li className='p-2 font-medium text-slate-500 duration-200 hover:text-black'>
                <Link href='/events'>Events</Link>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
