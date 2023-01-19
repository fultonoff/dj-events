import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'

function Search() {

    const [term, setTerm] = useState('')
    const router = useRouter()
    const handleSubmit = (e)=>{
        e.preventDefault()
        router.push(`/events/search?term=${term}`)

        setTerm('')
    }
  return (
    <div className='w-[250px] h-[35px] p-[5px] border border-[#777] rounded-[5px]'>
        <form onSubmit={handleSubmit}>
        <input type="text" value={term} onChange={(e)=> setTerm(e.target.value)} placeholder='Search Events' className='w-full h-full outline-none'/>
        </form>
    </div>
  )
}
export default Search