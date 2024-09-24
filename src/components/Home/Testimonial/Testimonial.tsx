"use client";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";
// import userImage3 from '@/public/user3.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, Autoplay ,FreeMode} from 'swiper/modules';
// Import Swiper styles

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { TTestimonial } from "@/Type/Type";
import { testimonials } from "@/FakeData/fakeData";

console.log(testimonials)
const Testimonial = () => {
  return (
    <div className="my-12">
      <h2
        className="text-5xl text-[#4E6D7D] text-center
             font-['Open_Sans'] font-semibold px-4  py-16"
      >
        Our Happy Customers
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-10">
    
   

<Swiper
style={{paddingTop:"20px"}}
breakpoints={
  {
    340:{
      slidesPerView:2,
      spaceBetween:15
    },
    700:{
      slidesPerView:3,
      spaceBetween:20
    }
  }
}
      // install Swiper modules
      modules={[Pagination, Autoplay, FreeMode]}    
      slidesPerView={3}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      freeMode={true}
     
      className="max-w-[90%] h-[380px] lg:max-w-[90%]"
    >
     {testimonials.map((testimonial:TTestimonial) => {
          return (
            <SwiperSlide key={testimonial.id} >
              
              <TestimonialCard  testimonial={testimonial}/>
            </SwiperSlide>
          );
        })}
    </Swiper>
  
      </div>
    </div>
  );
};

export default Testimonial;
