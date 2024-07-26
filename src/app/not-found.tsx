import React from 'react'
import Image from 'next/image'

const NotFound = () => {
  return (
    <div className="flex align-middle justify-center py-16 px-4">

        <Image src="/404.png" alt="404 Error" width="400" height="400"/>

    </div>
  )
}

export default NotFound