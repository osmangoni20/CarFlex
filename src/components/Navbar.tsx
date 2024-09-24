'use client';

interface NavbarProps {}
import logo from '@/public/carflex logo.png'
import Image from 'next/image';
import Link from 'next/link';
import instagram from '@/public/instagram.png'
import facebook from '@/public/facebook.png'

const Navbar = ({}: NavbarProps) => {
    return (
        <div>
<div className=" h-[50px] my-0 flex text-xl p-2 justify-between items-center bg-[#D7E5EE] py-2 text-black">
        <ul className='flex items-center gap-2 text-sm font-medium'>
       <li className='flex items-center '>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg> <p className='text-underline '>Use Location</p>
       </li>
        <li className='flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
</svg>
<p>Help</p>
        </li>
        </ul>
        <ul className="flex items-center gap-3 left-0 justify-between">
         
          <li className="border-2   h-[35px]  w-[35px]  bg-white  border-[#65D6E7] rounded-full p-2">
          <Link target="_blank" href={"https://wa.link/nas487"}>
              <Image width={35} height={35} alt='' src={instagram} />
            </Link>
          </li>
          <li
            className="border-2   h-[35px]  w-[35px]
                                bg-white border-[#65D6E7]
                                rounded-full p-2"
          >
            <Link target="_blank" href={"/"}>
            <Image width={50} height={50} alt='' src={facebook} />
            </Link>
          </li>
          <li className="border-2   h-[35px]  w-[35px]  bg-white border-[#65D6E7] rounded-full p-2">
          <Link target="_blank" href={"https://wa.link/nas487"}>
              <Image width={50} height={50} alt='' src={instagram} />
            </Link>
          </li>
        </ul>
      </div>
        <div className="navbar shadow bg-[#4E6D7D] ">
            
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         <li className="text-gray-600 hover:text-white px-3 py-2 rounded-md text-md font-medium">
               <Link href={"/"}>
               Vehicles
               </Link>
             </li>
            
             <li className="text-gray-600 hover:text-white px-3 py-2 rounded-md text-md font-medium">
               <Link href={"/"}>
                 Booking 
               </Link>
             </li>
             <li className="text-gray-600 hover:text-white px-3 py-2 rounded-md text-md font-medium">
               <Link href={"/"}>
                 Contact
               </Link>
             </li>
             <li className="text-gray-600 hover:text-white px-3 py-2 rounded-md text-md font-medium">
               <Link href={"/"}>
                 About Us
               </Link>
             </li>
      </ul>
    </div>
    <Link href={"/"}>
    <Image className='md:block' width={80} height={70} src={logo} alt={''}/>

    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal px-1 text-lg font-semibold">
           
           <li className="text-md hover:bg-[#48aebd] font-semibold text-gray-50 hover:text-white px-3 py-2 rounded-md text-md">
               <Link href={"/cars/"}>
               Vehicles
               </Link>
             </li>
            
             <li className="text-md hover:bg-[#48aebd] font-semibold text-gray-50 hover:text-white px-3 py-2 rounded-md text-md">
             <Link href={"/"}>
                 Booking 
               </Link>
             </li>
             <li className="text-md hover:bg-[#48aebd] font-semibold text-gray-50 hover:text-white px-3 py-2 rounded-md text-md">
             <Link href={"/"}>
                 Contact
               </Link>
             </li>
             <li className="text-md hover:bg-[#48aebd] font-semibold text-gray-50 hover:text-white px-3 py-2 rounded-md text-md">
             <Link href={"/"}>
                 About Us
               </Link>
             </li>
          
         </ul>
  </div>
  <div className="navbar-end">
  <button className='px-10 py-2 border-2 hover:rounded-xl hover:bg-[#20516A] border-white text-white text-xl font-semibold rounded-md '>Login</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;