
import { Inter } from 'next/font/google'
import Block1 from '@/src/contents/home/block1/Block1'
import Navbar from '@/src/layouts/extendedLayout/navbar/Navbar'
import Footer from '@/src/layouts/extendedLayout/footer/Footer'
import Block2 from '@/src/contents/home/block2/Block2'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
 <>
 <Navbar/>
    <Block1/>
    <Block2/> 
   <Footer/> 


 </>
  )
}
