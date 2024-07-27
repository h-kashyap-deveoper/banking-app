import { Button } from '@/components/ui/button';
import React from 'react'

const InnerPageSmallHero = (props) => {

  let test;
  if(props.shortDesc.length>0) {
    test = props.shortDesc;
  }


  return (
    <>
    <div className="flex flex-col gap-8 align-center justify-start px-8 py-[80px] bg-slate-50">
      <div className="text-4xl font-semibold">{props.pageTitle}</div>
      {test}
    </div>
    <div className="max-w-[1000px] m-auto my-8">
      {props.pageData}
    </div>
    </>
  )
}

export default InnerPageSmallHero