import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URL2 } from '@/config/index'
import axios from 'axios';


const {
    API_URL
  } = process.env
  

 function add() {
  

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [values, setValues] = useState({
    name: '',
    performers: '',
    venue: '',
    address: '',
    date: '',
    time: '',
    description: ''
  })

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()


  const handleSubmit = async (e)=>{
    e.preventDefault()
    

    //Validation

    const hasEmptyField = Object.values(values).some((element)=> element === '')
    
    if(hasEmptyField){

        toast.error('Please fill in all field')
      
    }

    const res = await axios.post(`${API_URL2}/api/events`, {
        data:{
          name: values.name,
          performers: values.performers,
          venue: values.venue,
          address: values.address,
          date: values.date,
          time: values.time,
          date: values.date,
        }
    })

    if(!res.ok){
      toast.error('Something Went Wrong')
    }else{
      const evt = await res.json()

      router.push(`/events/${evt.slug}`)
    }
  }
const handleInputChange = (e)=>{

  const {name, value} = e.target
  setValues({...values, [name]: value})
}

  return (
    <Layout title='Add New Event'>
      <Link href='/events' className='text-blue-500'>👈 Go Back</Link>
      <h1>Add Event</h1>
      <ToastContainer/>
      <form onSubmit={handleSubmit} className='form'>
      <div className='grid'>

        <div>
          <label htmlFor="name">Event Name</label>
          <input type="text" id='name' name='name' value={values.name} onChange={handleInputChange} className='border'/>
        </div>

        <div>
          <label htmlFor="performers">Performers</label>
          <input type="text" id='performers' name='performers' value={values.performers} onChange={handleInputChange} className='border'/>
        </div>

        <div>
          <label htmlFor="venue">Venue</label>
          <input type="text" id='venue' name='venue' value={values.venue} onChange={handleInputChange} className='border'/>
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input type="text" id='address' name='address' value={values.address} onChange={handleInputChange} className='border'/>
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input type="date" id='date' name='date' value={values.date} onChange={handleInputChange} className='border'/>
        </div>
        <div>
          <label htmlFor="time">Time</label>
          <input type="text" id='time' name='time' value={values.time} onChange={handleInputChange} className='border'/>
        </div>
      </div>
      <div>

    <label htmlFor="description">Event description</label>
      <textarea type='text' name="description" id="description" value={values.description} className='border' onChange={handleInputChange}></textarea>
      </div>
      <input type="submit" value="Add Event" className='btn text-white bg-red-500 rounded-sm cursor-pointer'/>
      </form>
    </Layout>
  )
}

export default add
