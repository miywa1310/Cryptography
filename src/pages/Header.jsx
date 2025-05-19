import React from 'react'
import imgLogo from '../images/image.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="w-full h-[80px] bg-[#1e1e69] flex justify-between items-center py-[20px] px-[10%] text-white text-[24px] ">
        <div className=""><Link to={"/"}>
        <img src={imgLogo} className='w-[70px] h-[70px] rounded-full object-cover' alt="" />
              </Link></div>
        <div className=""><Link to={"/"}><h2 className=''>Cryptography</h2></Link></div>
    </div>
  )
}

export default Header