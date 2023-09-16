import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

function Block1() {
  return (
    <>
   <div className='h-[35rem] max-sm:hidden flex gap-16 w-full bg-cover bg-no-repeat  bg-hero-pattern '>
    {/* <img src="https://www.aesop.com/u1nb1km7t5q7/51ATQtZl3wy8KBBgt4MACM/1588c8b4d7e2291b47796d3d42884f1f/Aesop_Othertopias_2023_Web_Homepage_2_Primary_Full_Bleed_Desktop_2880x1044px.jpg" className='h-full' alt="" /> */}
      <div className='pt-20  pl-14'>
    <h1 className='text-[#FFFEF2] font-[400px] text-[36px]'>
      Aesop
    </h1>
      </div>
      <div className=' w-[360px] mt-24 text-white  h-[587px]'>
         <h5>Doorways under to discover</h5>
         <h1 className=' font-[600] mt-2 text-[30px]'>Othertopias: a collection of unorthodox fragrances</h1>
         
          <p className='font-[300] text-[15px] py-6 '>Step inside six fragrant worlds that transcend our immediate perception—vivid and distinctive.</p>
          <button className="border border-slate-400 mt-2 hover:text-white hover:bg-[#333333] px-3 flex  gap-2 py-5">Discover the fragrances  <BsArrowRight className="text-center mt-[4px]" /> </button>
      </div>
      
   </div>
   <div className=' h-36 max-lg:h-0  bg-[#FFFEF2]'></div>
  </>
  )
}

export default Block1