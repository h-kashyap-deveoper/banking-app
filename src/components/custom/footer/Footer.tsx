import React from 'react'
import Image from 'next/image'


const Footer = () => {
  return (
    <div className="bg-slate-100 flex flex-row justify-between mx-auto px-8 py-4 sticky top-0">
        <div>
        <Image src="/logo.png" alt="Logo" height="40" width="200"/>
        <p>test</p>
        </div>
    </div>
  )
}

export default Footer