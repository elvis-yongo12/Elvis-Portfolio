import React from 'react'
import { BsInstagram, BsTwitter ,BsLinkedin} from "react-icons/bs"


function HeaderTop() {
  return (
    <div className='border-b border-gray-300 hidden sm:block '>
        <div className="cointainer p-4">
            <div className="flex justify-between items-center">
                <div className="hidden lg:flex gap-1">
                    <div className="header_top_icon_wrapper">
                        <BsInstagram/>
                    </div>
                    <div className="header_top_icon_wrapper">
                        <BsTwitter/>
                    </div>
                    <div className="header_top_icon_wrapper">
                        <BsLinkedin/>
                    </div>
                </div>
                <div className='text-gray-500 text-[20px]'>
                   <b>Elvis Odhiambo Yongo</b> 
                </div>
                <div className="flex gap-4">
                <select name="language" id="language">
                    <option value="English">English</option>
                    <option value="Kiswahili">Kiswahili</option>
                </select>

                </div>

                
            </div>

        </div>
    </div>
  )
}

export default HeaderTop
