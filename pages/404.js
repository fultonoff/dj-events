import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import {FaExclamationTriangle} from 'react-icons/fa'

function NotFoundPage() {
  return (
    <Layout title='Page not found'>
        <div className='text-center'>
            <h1 className='font-bold text-4xl mb-10 text-center'>404</h1>
            <h4 className='font-medium'>Sorry there is nothing here </h4>
            <Link href='/' className='text-blue-400'>Go back Home</Link>
        </div>
    </Layout>
  )
}

export default NotFoundPage