'use client';

import Image from "next/image";
import Link from "next/link";
import logo from '@/public/carflex logo.png'
interface FooterProps {}

const Footer = ({}: FooterProps) => {
    return (
        <div className="bg-[#151C22] ">
            <footer className="footer   p-10 text-base-100">
  <aside>
  <Link href={"/"}>
            {/* <Logo/> */}
            <Image
      src={logo}
      width={150}
      height={100}
      alt="Car Flex"
    />
          </Link>
    <p>
    CarFlex - Flexible and Affordable Car Rentals
    </p>
    {/* Social Media Icons */}
    <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white">
            <span className="sr-only">Facebook</span>
            {/* Facebook Icon */}
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24h11.497v-9.294H9.691v-3.631h3.13V8.413c0-3.1 1.893-4.785 4.656-4.785 1.325 0 2.464.099 2.796.143v3.24h-1.919c-1.504 0-1.796.715-1.796 1.763v2.31h3.592l-.468 3.631h-3.124V24h6.127C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z"
              />
            </svg>
          </a>

          <a href="#" className="text-gray-400 hover:text-white">
            <span className="sr-only">Twitter</span>
            {/* Twitter Icon */}
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.951.555-2.005.959-3.127 1.175-.897-.955-2.178-1.555-3.594-1.555-2.725 0-4.928 2.203-4.928 4.928 0 .39.045.765.127 1.124C7.688 8.094 4.064 6.13 1.64 3.161c-.427.735-.666 1.582-.666 2.491 0 1.718.87 3.23 2.188 4.12-.807-.026-1.566-.247-2.23-.616v.061c0 2.4 1.707 4.398 3.965 4.851-.416.111-.855.171-1.307.171-.32 0-.63-.031-.934-.089.631 1.953 2.464 3.377 4.633 3.416-1.7 1.332-3.834 2.125-6.152 2.125-.399 0-.79-.023-1.174-.068 2.197 1.41 4.805 2.235 7.605 2.235 9.125 0 14.122-7.544 14.122-14.085 0-.213-.004-.426-.015-.637.967-.697 1.8-1.562 2.463-2.549z" />
            </svg>
          </a>

          <a href="#" className="text-gray-400 hover:text-white">
            <span className="sr-only">Instagram</span>
            {/* Instagram Icon */}
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0c-3.313 0-3.731.013-5.034.072-1.297.058-2.188.266-2.96.567A5.923 5.923 0 0 0 1.64 1.64C1.34 2.413 1.132 3.304 1.072 4.601.013 5.903 0 6.322 0 9.634v4.733c0 3.312.013 3.73.072 5.034.058 1.297.266 2.188.567 2.96a5.923 5.923 0 0 0 1.639 1.639c.773.301 1.664.509 2.961.567 1.303.058 1.72.072 5.034.072s3.731-.013 5.034-.072c1.297-.058 2.188-.266 2.96-.567a5.923 5.923 0 0 0 1.639-1.639c.301-.773.509-1.664.567-2.96.058-1.304.072-1.722.072-5.034s-.013-3.731-.072-5.034c-.058-1.297-.266-2.188-.567-2.96a5.923 5.923 0 0 0-1.639-1.639c-.773-.301-1.664-.509-2.96-.567-1.303-.058-1.721-.072-5.034-.072zm0 2.162c3.275 0 3.67.012 4.965.07 1.22.055 1.883.257 2.324.433a3.758 3.758 0 0 1 1.357.918c.418.418.717.91.918 1.357.176.441.378 1.104.433 2.324.058 1.295.07 1.69.07 4.965s-.012 3.67-.07 4.965c-.055 1.22-.257 1.883-.433 2.324a3.758 3.758 0 0 1-.918 1.357c-.418.418-.91.717-1.357.918-.441.176-1.104.378-2.324.433-1.295.058-1.69.07-4.965.07s-3.67-.012-4.965-.07c-1.22-.055-1.883-.257-2.324-.433a3.758 3.758 0 0 1-1.357-.918c-.418-.418-.717-.91-.918-1.357-.176-.441-.378-1.104-.433-2.324-.058-1.295-.07-1.69-.07-4.965s.012-3.67.07-4.965c.055-1.22.257-1.883.433-2.324a3.758 3.758 0 0 1 .918-1.357c.418-.418.91-.717 1.357-.918.441-.176 1.104-.378 2.324-.433 1.295-.058 1.69-.07 4.965-.07zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 2.162a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm6.406-2.32a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
            </svg>
          </a>
        </div>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Long-term car rental</a>
    <a className="link link-hover">One-way car rental</a>
    <a className="link link-hover">Weekend car rental</a>
    <a className="link link-hover">Car rental insurance</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Vehicles</a>
    <a className="link link-hover">Dashboard</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
 
</footer>
<div className="flex justify-center items-center text-sm">
  © 2024 CarFlex. All Rights Reserved.
  </div>
        </div>
    );
};

export default Footer;