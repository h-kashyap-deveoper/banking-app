import React from 'react'
import Image from 'next/image'


const mainMenuItems: { title: string; href: string }[] = [
    {
      title: "Loan Consulting",
      href: "/docs/primitives/alert-dialog",
    },
    {
      title: "Membership Cards",
      href: "/docs/primitives/hover-card",
    },
    {
      title: "Credit Buiding Subscription",
      href: "/docs/primitives/tooltip",
    },
    {
      title: "Channel Partners",
      href: "/docs/primitives/tooltip",
    },  
  ]
  


const Footer = () => {
  return (
    <div className="bg-slate-100 flex flex-row justify-between mx-auto px-8 py-16 sticky top-0">
        <div className="flex flex-col gap-4">
        <Image src="/logo.png" alt="Logo" height="40" width="100"/>
        <p>test</p>
        </div>
    </div>
  )
}

export default Footer