import React from 'react'
import { Button } from "@/components/ui/button"
import HeaderMenuItems from '@/components/custom/header/HeaderMenuItems'

const Header = () => {
  return (
    <div className="flex flex-row justify-between mx-auto px-8 py-4 sticky top-0 shadow-md">
        <div className="flex flex-col py-auto text-lg font-semibold">
            Credit Samdhan
        </div>
        <div className="">
            <HeaderMenuItems/>
        </div>
        <div>
            <Button>Get A Loan</Button>
        </div>

    </div>
  )
}

export default Header