import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import ContactForm from '@/components/custom/Contact/ContactForm'

const page = () => {
  return (
    <div className="w-full min-h-[580px] flex flex-row align-center justify-between px-8 py-[80px] ">
        <div className="flex justify-center flex-col gap-4">
                <h1 className="text-5xl font-semibold max-w-[580px] mb-8">We're happy to get in touch with you.</h1>
             
                <p className="max-w-[400px] text-xl">
                  <Link href="tel:+918699812167">
                  +91 8699 81 2167
                  </Link>
                </p>

                <p className="max-w-[400px] text-xl">
                  <Link href="tel:+918699812167">
                  contact@creditsamdhan.com
                  </Link>
                </p>

        </div>
        <div className="flex align-center justify-center flex-col mr-20">
            <ContactForm/>
        </div>
    </div>
  )
}

export default page