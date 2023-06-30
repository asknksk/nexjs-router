import { useRouter } from 'next/router'
import React from 'react'

const DetailPage = () => {
    const router = useRouter()
    console.log(router.query)
    return (
    <div>DetailPage</div>
  )
}

export default DetailPage