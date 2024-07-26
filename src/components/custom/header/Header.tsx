import React from 'react'
import { Button } from "@/components/ui/button"
import HeaderMenuItems from '@/components/custom/Header/HeaderMenuItems'
import Image from 'next/image'


const Header = () => {
  return (
    <div className="flex flex-row justify-between mx-auto px-8 py-4 sticky top-0 bg-white shadow-md">
        <div className="flex flex-row gap-2 py-auto text-lg font-semibold xl:min-w-[300px]">
            <Image src="/logo.png" alt="Logo" width="50" height="2"/>
            <p className="flex mt-2">Credit Samdhan</p>
        </div>
        <div className="">
            <HeaderMenuItems/>
        </div>
        <div className="xl:min-w-[300px] flex justify-end">
            <Button>Get A Loan</Button>
        </div>

    </div>
  )
}

export default Header