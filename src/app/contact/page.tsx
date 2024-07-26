import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import ContactForm from '@/components/custom/Contact/ContactForm'

const page = () => {
  return (
    <div className="w-full min-h-[580px] flex flex-row align-center justify-between px-8 py-[80px] bg-slate-50">
        <div className="flex justify-center flex-col gap-4">
                <h1 className="text-5xl font-semibold max-w-[580px]">We're happy to get in touch with you.</h1>
                <p className="capitalize max-w-[400px]">Optimize & streamline your finances with beneficial subscription plans.</p>
                <Link href="/services">
                <Button className="max-w-min">Our Services</Button>
                </Link>
        </div>
        <div className="flex align-center justify-center flex-col mr-20">
            <ContactForm/>
        </div>
    </div>
  )
}

export default page