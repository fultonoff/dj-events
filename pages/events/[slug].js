import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import {FaPenAlt, FaTimes} from 'react-icons/fa'

function EventPage({evt}) {

  const deleteEvent = ()=>{
    console.log('delete')
  }

    const router = useRouter()
    
  return (
    <Layout>
     
     <div className='event'>
      <div className='controls flex'>
      <Link href={`/event/edit/${evt.id}`}>
        <div className='flex items-center space-x-2'>
        <FaPenAlt/> 
        <span>Edit event</span>

        </div>
      </Link>
      <a href="#" className='delete' onClick={deleteEvent}>
        <div className='flex items-center space-x-2'>
          <FaTimes/>
          <span>Delete Event</span>
        </div>
      </a>
      </div>
      <div>


      <span>
        {new Date(evt.attributes.date).toLocaleDateString('en-US')} at {evt.attributes.time}
      </span>
      <h1>{evt.attributes.name}</h1>
      {evt.attributes.image.data.attributes.url && (
        <div className='image'>
          <Image src={evt.attributes.image.data.attributes.url} width={960} height={600} alt=''/>
        </div>
      )}
      <h3>Performers:</h3>
      <p>{evt.attributes.performers}</p>
      <h3>Description</h3>
      <p>{evt.attributes.description}</p>
      <h3>Venue: {evt.attributes.venue}</h3>
      <p> {evt.attributes.address}</p>
      </div>



     </div>
      <Link href='/events' className='text-blue-500'>Go Back</Link>
    </Layout>
  )
}

export default EventPage


export async function getServerSideProps({params:{
  slug
}}){
  const {
    API_URL
  } = process.env

  // const req = await fetch(`${API_URL}/api/events?populate=image&?slug=${slug}`)
  const req = await fetch(`${API_URL}/api/events?filters[slug][$eq]=${slug}&populate=image`)
  const events = await req.json()

 

  return{
    props: {
      evt: events.data[0]
    }
  }
}