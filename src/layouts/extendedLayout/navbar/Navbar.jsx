
 import  {FiSearch}  from 'react-icons/fi'
 
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

import { useRouter } from "next/router";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
function Navbar() {
  return (
    <>
      <div className='h-20 border-2 w-full max-md:hidden font-mulish font-[500] fixed justify-between px-10 flex  items-center bg-[#FFFEF2]'>
        <ul className='flex max-sm:hidden gap-6 max-lg:gap-6 max-xl:gap-2  text-[15px]  items-center  text-[#333333]'>
            <li  className=' max-lg:hidden '>Skin Care</li>
            <li  className=' max-lg:hidden '>Body</li>
            <li  className=' max-lg:hidden '>Hand</li>
            <li  className=' max-lg:hidden '>Hair</li>
            <li  className=' max-lg:hidden '>Fragrance</li>
            <li  className=' max-lg:hidden '>Home</li>
            <li  className=' max-lg:hidden '>Kits & Travel</li>
            <li>Gifts</li>
            <li>Read</li>
            <li>Stores</li>
            <li className=' max-lg:hidden '>Facial Appointments</li>
            <li className='text-[21px] max-xl:text-[12px] max-lg:text-[21px] '><FiSearch/></li>
        </ul>
        <ul className='flex gap-6 text-[15px] items-center  text-[#333333]'>
            <li>Login</li>
            <li>Cabinet</li>
            <li>Cart</li>
            </ul>

      </div>
      <div className="w-full  h-max">
          <Accordion sx={{ display: { md: "none" }, overflow: "none" }}>
            <AccordionSummary
              // expandIcon={}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ backgroundColor: "#1CB39B", color: "#fff" }}
            >
              <Typography>
                <MenuIcon />
                Menu
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                marginTop: "250px",
                backgroundColor: "#1cb39b",
                overflow: "none",
              }}
            >
              <button className="border-black text-start border-b-[1.5px] py-4 w-11/12 text-[16px] font-medium text-[white] hover:text-[#FF315A]">
                HOME
              </button>
              <button className="border-black text-start border-b-[1.5px] py-4 w-11/12 text-[16px] font-medium text-[white] hover:text-[#FF315A]">
                B.ED COURSE
              </button>
              <button className="border-black text-start border-b-[1.5px] py-4 w-11/12 text-[16px] font-medium text-[white] hover:text-[#FF315A]">
                JBT/D.EL.ED
              </button>
              <button className="border-black text-start border-b-[1.5px] py-4 w-11/12 text-[16px] font-medium text-[white] hover:text-[#FF315A]">
                NTT COURSE
              </button>
              <button className="border-black text-start border-b-[1.5px] py-4 w-11/12 text-[16px] font-medium text-[white] hover:text-[#FF315A]">
                UP/PG COURSES
              </button>
              <button className="border-black text-start border-b-[1.5px] py-4 w-11/12 text-[16px] font-medium text-[white] hover:text-[#FF315A]">
                IT COURSES
              </button>
              <button className="border-black text-start border-b-[1.5px] py-4 w-11/12 text-[16px] font-medium text-[white] hover:text-[#FF315A]">
                GALLERY
              </button>
              <button className="border-black text-start border-b-[1.5px] py-4 w-11/12 text-[16px] font-medium text-[white] hover:text-[#FF315A]">
                BLOG
              </button>

              <button className="border-black text-start border-b-[1.5px] py-4 w-11/12 text-[16px] font-medium text-[white] hover:text-[#FF315A]">
                CONTACT
              </button>
            </AccordionDetails>
          </Accordion>
        </div>
     
    </>
  )
}

export default Navbar