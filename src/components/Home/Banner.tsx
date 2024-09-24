'use client';

import { useState } from "react";
import { Button } from "../ui/button";

interface BannerProps {}

const Banner = ({}: BannerProps) => {
    const [isForm, setForm]=useState(false)
    return ( 
        <div
  className="hero min-h-screen bg-[url('../public/bannerbg.jpg')]">
        
        <div className="text-center  ">
            <h1 className="text-8xl text-white  font-['Open_Sans'] font-semibold px-4 space-x-96">NEED A CAR?</h1>
            <p className=" font-thin text-slate-100 text-3xl space-x-24">ENJOY YOUR ADVENTURE WITH US</p>
        
            <Button onClick={()=>setForm(!isForm)} className="w-[300px] 
              mt-20
 text-white bg-[#376B7C] hover:text-[#376B7C] hover:bg-white border-2
  border-white hover:border-[#03b3d2] rounded-2xl py-8  text-2xl font-semibold">Book Now</Button>
        </div>

       {
        isForm&& <div className="max-w-[600px] bg-white rounded-md px-5 py-2">
        <h2 className="text-['#47B1C2'] font-['Open_Sans'] text-5xl font-semibold text-center py-4 text-black">Reserve a Vehicle
        </h2>
        <div>
            <form className="text-md font-semibold">
                <div>
                <label>Pick-up & Return Location (ZIP, City or Airport)*</label>
                <input placeholder="Provide a Pickup Location" className="ring-1 ring-inset font-extralight p-2 focus:ring-[#275F6F] ring-gray-300 w-full my-2 h-[50px] border-2 border-[#65D6E7] rounded-lg" type="text"></input>
                </div>
                <div>
                <label>Return Location (ZIP, City or Airport)*</label>
                <input placeholder="Provide Return Location" className="ring-1 ring-inset font-extralight p-2 focus:ring-[#275F6F] ring-gray-300 w-full my-2 h-[50px] border-2 border-[#65D6E7] rounded-lg" type="text"></input>
                </div>
                <div className="flex justify-between items-center flex-wrap gap-2">
                <label>Total Traveler</label>
                <input className=" h-[50px] ring-1 ring-inset font-extralight p-2 focus:ring-[#275F6F] w-full border-2 border-[#65D6E7] rounded-md" type="number"></input>
                <label>PickUp Date*</label>
                <input  className="h-[80px] p-2 font-normal border-2 border-[#65D6E7] rounded-md" type="date"></input>
                
                <label>Return Date*</label>
                <input className=" h-[80px] p-2 font-normal border-2 border-[#65D6E7] rounded-md" type="date"></input>
               
                </div>
                
            </form>

            <div className="flex justify-center items-center ">
                <Button className="px-10 rounded-lg my-8 py-6 text-white bg-[#47B1C2] text-xl font-semibold">Browse Vehicles</Button>
            </div>
        </div>
    </div>
       }
</div>
    );
};

export default Banner;