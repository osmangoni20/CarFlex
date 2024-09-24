'use client';
import Image from "next/image";
// import userImag31 from '@/public/user1.jpg'
import userImage2 from "@/public/user2.jpg";
// import { TTestimonial } from "./Testimonial";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TestimonialCard = ({testimonial}:any) => {
    return (
        <div>
            <div className=" w-[350px] h-[320px] pt-[20px] rounded-b-xl relative shadow-lg ">
                <div className="flex justify-between">
                  <div>
                    <h3 className="bg-[#3B5973] min-w-[150px] font-[Montserrat] inline-block text-xl text-white p-4 rounded-r-full">
                      {testimonial.name}
                    </h3>
                    <br />
                    <h3 className="bg-[#3B5973] min-w-[150px] font-[Montserrat] inline-block text-xl text-white p-4 rounded-r-full">
                      {testimonial.rentedCar}
                    </h3>
                  </div>
                  <div>
                    <div className="rounded-full z-50  shadow-md bg-white  w-[80px] h-[80px] pt-0 absolute  -top-4 -right-2">
                      <Image
                        className="rounded-full border-2 border-[#3B5973] w-[80px] h-[80px]"
                        src={userImage2}
                        alt=""
                      ></Image>
                    </div>
                    <div className="flex justify-center absolute right-0 top-20 items-center gap-3">
                      {[...Array(testimonial.rating)].map((rate) => (
                        <div key={rate}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#3B5973"
                            className="size-6"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      ))}
                      {[...Array(5-testimonial.rating)].map((rate) => (
                        <div key={rate}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#3B5973"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                            />
                          </svg>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-4 text-medium text-center font-[Roboto]">
                
                  <p>{testimonial.feedback}</p>
                </div>
              </div>
        </div>
    );
};

export default TestimonialCard;