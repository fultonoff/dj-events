import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <fotter className='mx-auto w-full text-center flex flex-col'>
      <p className='my-[5px] mx-0'>Copyright &copy; DJ Events 2021</p>
      <p className='text-blue-500'>
        <Link href='/about'>About this project</Link>
      </p>
    </fotter>
  )
}

export default Footer
