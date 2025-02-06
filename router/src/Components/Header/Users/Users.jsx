import React from 'react'
import { useParams } from 'react-router-dom'

function Users() {
    const {userid}=useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl '>Users: {userid}</div>
  )
}

export default Users