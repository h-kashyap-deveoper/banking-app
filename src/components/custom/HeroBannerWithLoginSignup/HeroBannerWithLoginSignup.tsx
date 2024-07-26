import { Button } from '@/components/ui/button'
import React from 'react'
import LoginSignUpTab from './LoginSignUpTab'

const HeroBannerWithLoginSignup = () => {
  return (
    <div className="w-full min-h-[520px] flex flex-row justify-evenly align-center px-8 py-4 bg-slate-50">
        <div className="flex justify-center flex-col gap-4">
                <h1 className="text-5xl font-semibold max-w-[580px]">Sabse Best Financial Consultation & Service</h1>
                <p className="capitalize max-w-[400px]">Optimize & streamline your finances with beneficial subscription plans.</p>
                <Button className="max-w-min">Apply Now</Button>
        </div>
        <div className="flex align-center justify-center flex-col gap-4">
            <LoginSignUpTab/>
        </div>
    </div>
  )
}

export default HeroBannerWithLoginSignup