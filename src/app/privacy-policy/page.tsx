import InnerPageSmallHero from '@/components/custom/Global/InnerPageSmallHero'
import React from 'react'
import { promises as fs } from 'fs';

async function Page(){


    const file = await fs.readFile(process.cwd() + '/public/data/aSingleSimplePage.json', 'utf8');
    const data = JSON.parse(file);

  return (
    <div>
        <InnerPageSmallHero 
        pageTitle={data.title}
        shortDesc="Get to know what data we share. What you acknowledge"
        pageData={data.pagedata}
        />


    </div>
  )
}

export default Page