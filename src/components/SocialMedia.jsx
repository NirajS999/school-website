import React from 'react'
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"

const SocialMedia = () => {
  return (
    <div className='text-white'>
      <span className='relative inline-block overflow-hidden rounded-full p-[1px]'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <div className='inline-flex gap-6 h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-2 backdrop-blur-3xl'>
        <Link href="https://www.linkedin.com/" passHref target="_blank" rel="noopener noreferrer" className='hover-effect'><FaLinkedin fontSize="26px" /></Link>
        <Link href="https://github.com/" passHref target="_blank" rel="noopener noreferrer" className='hover-effect'><FaGithub fontSize="26px" /></Link>
        <Link href="https://x.com/" passHref target="_blank" rel="noopener noreferrer" className='hover-effect'><FaXTwitter fontSize="26px" /></Link>
        <Link href="https://www.instagram.com/" passHref target="_blank" rel="noopener noreferrer" className='hover-effect'><FaInstagram fontSize="26px" /></Link>               
      </div>
    </span>
    </div>
  )
}

export default SocialMedia