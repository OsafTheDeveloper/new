
import { useParams, useRouter } from 'next/navigation'
import React from 'react'


const contact = () => {
  const route = useParams()
  console.log(route)
  return (
    <div>contact</div>
  )
}

export default contact