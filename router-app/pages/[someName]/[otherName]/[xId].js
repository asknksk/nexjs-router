import { useRouter } from 'next/router'
import React from 'react'

const SomeCustomPage = () => {
    const router =useRouter()
    console.log(router.query)
  return (
    <div>SomeCustomPage</div>
  )
}

export default SomeCustomPage