
'use client';

import { benefitsData } from "@/FakeData/fakeData";


console.log(benefitsData)
interface BenefitsProps {}

const Benefits = ({}: BenefitsProps) => {
    return (
        <div className="my-5">
            <h2 className="text-5xl text-[#4E6D7D] text-center
             font-['Open_Sans'] font-semibold p-4 space-x-96 py-5">Why We’re Your Best Choice</h2>
            <div className="flex justify-center items-center flex-wrap gap-2">
            {
                benefitsData.map((benefit)=>{
                    return(
                        <div key={benefit.id} >
 <div className="card  w-[300px] h-[350px] shadow-xl">
              <figure className="px-10 pt-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#4E6D7D"
                  className="size-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={benefit.iconUrl}
                  />
                </svg>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-[#4E6D7D]">{benefit.title}</h2>
                <p>{benefit.description}</p>
                
              </div>
            </div>
                        </div>
                    )
                })
            }
            </div>
            
        </div>
    );
};

export default Benefits;