import { Button } from '@/components/ui/button'
import React from 'react'

const HeroBannerWithLoginSignup = () => {
  return (
    <div className="w-full min-h-[520px] flex flex-row justify-between px-8 py-4 bg-slate-50">
        <div className="flex justify-center flex-col gap-4">
                <h1 className="text-5xl font-semibold max-w-[580px]">Sabse Best Financial Consultation & Service</h1>
                <p className="capitalize max-w-[400px]">Optimize & streamline your finances with beneficial subscription plans.</p>
                <Button className="max-w-min">Apply Now</Button>
        </div>
        <div className="flex">
            test2
        </div>
    </div>
  )
}

export default HeroBannerWithLoginSignup