import React from 'react'
import Layout from '@/components/Layout'

function about() {
  return (

    <Layout title='About DJ events'>
    
    <div className='h-screen w-full'>
      <h1 className='font-bold text-3xl text-center mt-4'>About</h1>
      <p className='text-center'>This is an App to find the latest DJ and other musical events</p>
      <p className='text-center font-thin text-slate-500'>Version 1.0.0</p>
    </div>
    </Layout>
  )
}

export default about
