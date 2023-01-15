import React from 'react'
import { SocialIcon} from "react-social-icons";

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='relative container mx-auto md:mx-28 p-6'>
        <div className='flex items-center justify-between'>
            <div className='text-[#a6adba] font-bold md:text-2xl'>
            <SocialIcon url="https://www.youtube.com" fgColor="#da1a4e" bgColor="transparent" style={{ height: 50, width: 50 }}/>
            Youtube to mp3
            </div>
            <div>
            <button
                className="relative inline-flex items-center justify-center p-4 px-8 py-2 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-lg shadow-md group">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full rounded-lg text-white duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Guide</span>
                <span className="relative invisible">Guide</span>
            </button>
            </div>
        </div> 
    </nav>
  )
}

export default Navbar