import Head from 'next/head'
import Image from 'next/image'
import {useRouter} from 'next/router'
import Layout from '@/components/Layout'
import EventItem from '@/components/EventItem'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
const qs = require('qs');



export default function SearchPage({events}) {
    const router = useRouter()
   
  return (
    <Layout title='Search Result'>
      
      <main >
        <Link href='/events' className=' text-blue-500 font-semibold cursor-pointer'>👈Go Back</Link>
        <h1>Search result for : <span className='text-2xl font-bold'>{router.query.term}</span> </h1>
        {events.length === 0 && <h3>No Events to show</h3>}
        {events.map((evt)=>{

          return (
          
          <EventItem key={evt.id} evt={evt}/>
          
          
          
          )
        })}

        {events.length > 0 && (

          <div className='w-full text-center hover:-translate-y-1 duration-200'>

            <Link href='/events' className='bg-red-500 px-4 py-2 rounded-md shadow-sm text-white'>View all events</Link>
          </div>
        )}
      </main>
    </Layout>
  )
}


export async function getServerSideProps({query:{term}}) {
  const {API_URL} = process.env

  const query = qs.stringify({
  filters: {
    $or: [
      {
        name: {
          $contains: term,
        },
      },
      {
        description: {
          $contains: term,
        },
      },
      {
        venue: {
          $contains: term,
        },
      },
      {
        performers: {
          $contains: term,
        },
      },
    ],
    
  },
}, {
  encodeValuesOnly: true, // prettify URL
});

  

  const res = await fetch(`${API_URL}/api/events?${query}&populate=image`)
  const events = await res.json()

  return {
    props: {
      events: events.data
    }
  }
}