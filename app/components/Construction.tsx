import React from 'react'
import pushing from '@/public/construction/welding.jpg'
import Image from 'next/image'

function Construction() {
  return (
    <div className='background h-[550px] w-full  pt-7  ' style={{
        background:"require(../../public/construction/push.gif)"
    }} > 
        <div className=' rounded-md border-[4px] border-[#e1b382]  bg-gradient-to-r from-[#2d545e] w-60 glass h-60 mx-auto flex flex-col ' >
            <Image src={pushing} alt="working" className='w-full h-[90%]  rounded-tl-md  rounded-tr-md  ' />
            <p className='text-center pt-2 text-[#e1b382] ' >We are still working on this page</p>
        </div>
        
    </div>
  )
}

export default Construction