import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Showcase from './Showcase'
import {useRouter} from 'next/router'

function Layout({
    title,
    description,
    children,
    keywords
}) {

  const route = useRouter()
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name='description' content={description}/>
            <meta name='keywords' content={keywords}/>
        </Head>
        <Header/>

        {route.pathname === '/' &&<Showcase/>}
        <div className='my-[60px] mx-auto max-w-[960px] py-0 px-[30px]'>

      {children}
        </div>
        <Footer/>

    </div>
  )
}

Layout.defaultProps ={
    title: 'DJ Event | Find the hottest parties',
    description: 'Find the latest DJ and other musical events',
    keywords: 'music, dj, event'
}

export default Layout
