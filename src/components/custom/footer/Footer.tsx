import React from 'react'
import Image from 'next/image'
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'


const socialLinks: { image: string; href: string }[] = [
  {
    image: "/facebook.png",
    href: "/",
  },
  {
    image: "/instagram.png",
    href: "/",
  },
  {
    image: "/linkedin.png",
    href: "/",
  },
  {
    image: "/x.png",
    href: "/",
  },  
]


const mainMenuItems: { title: string; href: string }[] = [
    {
      title: "Loan Consulting",
      href: "/docs/primitives/alert-dialog",
    },  
    {
      title: "Membership cards",
      href: "/docs/primitives/alert-dialog",
    },
    {
      title: "Credit building subscription",
      href: "/docs/primitives/hover-card",
    },
    {
      title: "Channel Partners",
      href: "/docs/primitives/tooltip",
    },  
  ]


  const otherLinks: { title: string; href: string }[] = [
    {
      title: "Home",
      href: "/docs/primitives/alert-dialog",
    },
    {
      title: "About",
      href: "/docs/primitives/hover-card",
    },
    {
      title: "Contact",
      href: "/docs/primitives/tooltip",
    },
    {
      title: "T&C",
      href: "/docs/primitives/tooltip",
    },
    {
      title: "Privacy Policy",
      href: "/docs/primitives/tooltip",
    },      
  ]



  


const Footer = () => {
  return (
    <div className="bg-slate-100 flex flex-col justify-between mx-auto px-8 py-[80px]">
        <div className="flex justify-between align-middle flex-row gap-4 mb-8">
          <Image src="/logo.png" alt="Logo" height="40" width="100"/>
          <div className="flex justify-center align-middle m-0 p-0">
            <div className="flex flex-row align-middle justify-center">



            {socialLinks.map((socialItem) => (
                <Link href={socialItem.href} className="">
                    <Image src={socialItem.image} alt="Social Icon" width="40" height="40"/>
                </Link>
              ))}


            </div>
          </div>
        </div>
        <Separator className="mb-8"/>

        <div className="flex flex-col">


        <div className="flex flex-row mb-8">
          {mainMenuItems.map((menuItem) => (
            <Link href={menuItem.href} className="mr-6 flex flex-row">
                <p className=" font-semibold">{menuItem.title}</p><Separator orientation="vertical" className="ml-6"/>
            </Link>
          ))}
        </div>


        <div className="flex flex-row">
          {otherLinks.map((otherLink) => (
            <Link href={otherLink.href} className="mr-6 flex flex-row">
                <p className="text-slate-700">{otherLink.title}</p><Separator orientation="vertical" className="ml-6"/>
            </Link>
          ))}
        </div>




        </div>

    </div>
  )
}

export default Footer