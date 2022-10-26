
import React from 'react'

import {BiBox} from "react-icons/bi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import {AiOutlineMail,AiOutlineWifi,AiOutlineEdit,  } from "react-icons/ai";
import { CgMenuLeft } from "react-icons/cg";
import { FaCalendar, FaQrcode, FaSearch, FaThLarge,FaAngleDown } from "react-icons/fa";
import {FiBox,FiUserCheck ,FiLayers} from "react-icons/fi";
import {  HiOutlineArchiveBoxArrowDown,HiOutlineInbox,HiChevronUp} from "react-icons/hi2";
import { TfiBag } from "react-icons/tfi";
export const Sidebare = () => {
  return (
    
      
        
       
       
         <div className="space-y-8 text-white frond-sm primary-Sid-bg-color ">
            <CgMenuLeft className={`mt-3 ml-44 flex flex-end`}/>
            <div>
                <ul  className={`mt-3 ml-1 frond-sm `}>
                MENU
                <ul  className={`mt-3 ml-6 `}>
                <li  className={`mt-3 flex`}><FaThLarge className='text-left  mr-4'/>Dashboard <HiChevronUp className='text-left ml-9 mt-2 mr-6 flex-end'/></li>
                <li  className={`mt-3 ml-8`}>Ecommerce</li>
                <li  className={`mt-3 ml-8`}>Sass</li>
                <li  className={`mt-3 ml-8`}>Crypto</li>
                </ul>
                <ul  className={`mt-3 ml-2`}>
                APPLICATIONS
                <ul  className={`mt-3 ml-3 `}>
                <li  className={`mt-3 flex`}><FaCalendar className='text-left mr-4'/>Calender</li>
                <li  className={`mt-3 flex`}><IoChatbubbleEllipsesOutline className='text-left mr-4'/>Chat</li>
                <li  className={`mt-3 flex`}><BiBox className='text-left mr-4'/>File Manager</li>
                <li  className={`mt-3 flex`}><HiOutlineArchiveBoxArrowDown className='text-left mr-4' />Ecommerce<FaAngleDown className='text-left ml-9 mt-2 mr-6 flex-end'/></li>
                <li  className={`mt-3 flex`}><AiOutlineMail className='text-left mr-4'/>Email<FaAngleDown className=' ml-20 mt-2 mr-6 flex-end'/></li>
                <li  className={`mt-3 flex`}><HiOutlineInbox className='text-left mr-4'/>Invoices<FaAngleDown  className='text-left ml-16 mt-2 mr-6 flex-end'/></li>
                <li  className={`mt-3 flex`}><TfiBag className='text-left mr-4'/>Projects<FaAngleDown className='text-left ml-16 mt-2 mr-6 flex-end'/></li>
                <li  className={`mt-3 flex`}><AiOutlineWifi className='text-left mr-4'/>Contacts<FaAngleDown className='text-left ml-14 mt-2 mr-6 flex-end' /></li>
                </ul>
                </ul>
                <ul  className={`mt-3 ml-2`}>
                LAYOUTS
                </ul> 
                <ul  className={`mt-3 ml-2`}>
                PAGER
                <ul  className={`mt-3 ml-3 `}>
                <li  className={`mt-3 flex `}><FiUserCheck className='text-left mr-4'/>Authentication</li>
                <li  className={`mt-3 flex`}><FiBox className='text-left mr-4'/>Ultility<FaAngleDown className='text-left ml-20  mt-2 mr-6 flex-end'/></li>
                </ul>
                </ul> 
                <ul  className={`mt-3 ml-2 `}>
                COMPONENTS
                <ul  className={`mt-3 ml-3`}>
                <li  className={`mt-3 flex`}><FiLayers className='text-left mr-4'/>UI Elements<FaAngleDown className='text-left ml-10  mt-2 mr-6 flex-end' /></li>
                <li  className={`mt-3 flex`}><AiOutlineEdit className='text-left mr-4'/>Froms<FaAngleDown className='text-left ml-20 mt-2 mr-6 flex-end'/></li>
                </ul>
                </ul>
                </ul>
               </div>
         </div>
        

  )
}