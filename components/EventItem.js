import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function EventItem({evt}) {
    console.log(evt.attributes.slug)
  return (
    <div className='event'>
        <div className='img'>
            < Image src = {
                evt.attributes.image.data ? evt.attributes.image.data.attributes.url : 'https://img.freepik.com/free-photo/closeup-dj-working-blue-light_181624-18773.jpg?w=2000'
            }
            width = {
                170
            }
            height = {
                100
            }
            alt = 'event-image' />

        </div>
        <div className='info'>
            <span>{new Date(evt.attributes.date).toLocaleDateString('en-US')}</span>
            <h3>{evt.attributes.name}</h3>
        </div>
    
        <div className='link'>
            <Link href={`/events/${evt.attributes.slug}`}>
                <button className='bg-red-500 text-white px-4 py-2 rounded-md shadow-sm'>Details</button>
            </Link>
        </div>
    </div>
  )
}

export default EventItem