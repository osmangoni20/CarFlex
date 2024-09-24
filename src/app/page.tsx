import Banner from "@/components/Home/Banner";
import Benefits from "@/components/Home/Benefits";
import Featured from "@/components/Home/Featured";
import Testimonial from "@/components/Home/Testimonial/Testimonial";
import { Button } from "@/components/ui/button";
import carImage3 from '@/public/car4.png'

import Image from "next/image";
export default function Home() {
  return (
    <div >
      <Banner/>
      <Featured/>
      <div className="bg-white min-h-screen grid grid-cols-2 gap-2 space-y-24">
        <div className="flex gap-1">
         
          <Image src={carImage3} className="w-full h-full" alt=""/>

        </div>
          <div className="flex-col justify-center items-center my-auto text-center text-[#4E6D7D]">
            <h1 className="text-7xl 
             font-['Open_Sans'] font-semibold p-4 space-x-96">Rent cars for any occasion</h1>
            <p className=" font-thin text-xl space-x-6">Browse an incredible selection of cars, from the everyday to the extraordinary</p>
            <Button  className="w-[200px] m-4
 text-white bg-[#376B7C] hover:text-[#376B7C] hover:bg-white border-2
  border-white hover:border-[#03b3d2] rounded-2xl p-4  text-2xl font-semibold">Browse Car</Button>
        </div>
      </div>
      <Benefits/>
      <Testimonial/>
    </div>
  );
}
