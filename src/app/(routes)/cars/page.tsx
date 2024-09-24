'use client';

import { Button } from "@/components/ui/button";
import { carList } from "@/FakeData/fakeData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Cars = () => {
    const itemsPerPage=5;
    const totalPages=Math.ceil(carList.length/itemsPerPage)
    const pages=[...Array(totalPages).keys()]
    const [currentPage, setCurrentPage]=useState(1)
    const indexOfLastItem=currentPage*itemsPerPage
    const indexOfFistItem=indexOfLastItem-itemsPerPage
    const currentItems=carList.slice(indexOfFistItem,indexOfLastItem)
    const HandlePrevPage=()=>{
        if(currentPage>1){
            setCurrentPage(currentPage-1)
        }
    }
    const HandleNextPage=()=>{
        if(currentPage<pages.length){
            setCurrentPage(currentPage+1)
        }
    }
console.log(pages)
    return (
        <div className="my-5">
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-5">
          {
            currentItems.map(car=>{
                return(
                    <div key={car.id}>
                    <div className="card bg-white  w-[300px] h-[350px] shadow-xl">
                      <figure className="px-10 pt-10">
                        <Image width={300} height={200} src={car?.imageUrl} alt=""></Image>
                      </figure>
                      <div className="card-body items-center text-center ">
                        
                      <div className="flex gap-5 justify-between items-center">
                            <h2 className="card-title text-[#4E6D7D]">{car.brand} Car</h2>
                            <p className={`${car.availability?"bg-secondary":"bg-red-700"} text-sm px-1 rounded-full text-white`}>{car.availability?"Available":"Not Available"}</p>
                        </div>
                    
                        
                        <p className="text-medium font-semibold">{car.model}</p>
                        <p>{car.pricePerDay} Tk.</p>
                        <div className="card-actions">
                          <Link href={`/cars/${car.carId}`}>
                            <Button variant={"default"} className="rounded-full p-3">
                            View Details
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            })
           }
          </div>
          <div className="join flex justify-center my-10">
          <button onClick={()=>HandlePrevPage()} className="bg-secondary p-2 rounded text-white font-semibold">Prev</button>
            {
                pages.map(page=>{
                    return(
                        <button key={page} onClick={()=>setCurrentPage(Number(page+1))} className={`join-item px-6 btn ${currentPage===page+1&&"btn-active"}`}>{page+1}</button>
                    )
                })
            }
   <button onClick={()=>HandleNextPage()} className="bg-secondary p-2 rounded text-white font-semibold">Next</button>
</div>

        </div>
    );
};

export default Cars;