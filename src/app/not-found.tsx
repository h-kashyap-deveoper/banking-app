import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="flex align-middle justify-center py-16 px-4">
        <Link href="/">
            <Image src="/404.png" alt="404 Error" width="400" height="400"/>
        </Link>
    </div>
  )
}

export default NotFound