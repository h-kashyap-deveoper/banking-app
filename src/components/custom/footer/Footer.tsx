import React from 'react'
import Image from 'next/image'
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'

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
    <div className="bg-slate-100 flex flex-col justify-between mx-auto px-8 py-16 sticky top-0">
        <div className="flex justify-between align-middle flex-row gap-4 mb-8">
          <Image src="/logo.png" alt="Logo" height="40" width="100"/>
          <div className="flex justify-center align-middle m-0 p-0">
            <div className="flex flex-row align-middle justify-center">



            {mainMenuItems.map((menuItem) => (
                <Link href={menuItem.href} className="ml-2 flex align-middle justify-center max-h-6">

                    test

                </Link>
              ))}


            </div>
          </div>
        </div>
        <Separator className="mb-8"/>

        <div className="">
testst
        </div>

    </div>
  )
}

export default Footer