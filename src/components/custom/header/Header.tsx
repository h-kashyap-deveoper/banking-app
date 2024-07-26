import React from 'react'
import { Button } from "@/components/ui/button"


const Header = () => {
  return (
    <div className="flex flex-row justify-between mx-auto px-8 py-4">
        <div className="">
            Credit Samdhan
        </div>
        <div className="">
            test
        </div>
        <div className="">
            <Button>Get A Loan</Button>
        </div>

    </div>
  )
}

export default Header