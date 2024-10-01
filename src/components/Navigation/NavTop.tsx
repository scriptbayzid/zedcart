import React from 'react';
import { BsFacebook,BsTwitter,BsInstagram,BsLinkedin } from 'react-icons/bs';

const NavTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
            <div className="hidden lg:flex gap-1">
                <div className="icon_wrapper">
            <BsFacebook/>
                </div>
                <div className="icon_wrapper">
            <BsTwitter/>
                </div>
                <div className="icon_wrapper">
            <BsInstagram/>
                </div>
                <div className="icon_wrapper">
            <BsLinkedin/>
                </div>
            </div>
            <div className="text-gray-500 text-[12px]">
                <b>FREE SHIPPING</b> only for this week
            </div>
            <div className="flex gap-4">
                <select className="text-gray-500 text-[12px] w-[70px]" 
                name="currency"
                id="currency">
                    <option value="USD $">USD $</option>
                    <option value="EUR €">EUR €</option>
                </select>

                <select className="text-gray-500 text-[12px] w-[70px]" 
                name="language"
                id="language">
                    <option value="English">English</option>
                    <option value="French">French</option>
                </select>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NavTop;
