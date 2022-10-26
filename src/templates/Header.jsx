import React from "react";
import { FaQrcode, FaSearch, FaThLarge } from "react-icons/fa";
import{GiUsaFlag}from "react-icons/gi";
import {IoNotificationsOutline ,IoSettingsOutline ,IoIosArchive} from "react-icons/io5";
import dp1 from "../img/dp1.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 ">
      <div className="px-4 sm:px-6 lg:pr-8 lg:pl-0">
        <div className="flex items-center justify-between h-16 -mb-px">
          <div className="flex grow text-md ml-4 font-bold">
          Dashboard
            <div className="w-full">
            </div>
            <div className="flex items-center  md:gap-3 3xl:gap-4">
              <div className="tooltip ">
                <div className="flex items-center justify-center text-black w-2 h-2 lg:w-8 3xl:w-11 3xl:h-11 lg:h-8  ">
                  <FaSearch/>
                </div>
              </div>
            </div>
            <div className="flex items-center  md:gap-3 3xl:gap-4">
              <div className="tooltip ">
                <div className="flex items-center justify-center text-black w-2 h-2 lg:w-8 3xl:w-11 3xl:h-11 lg:h-8  ">
                <GiUsaFlag/>
                </div>
              </div>
            </div>
            <div className="flex items-center  md:gap-3 3xl:gap-4">
                <div className="tooltip ">
                <div className="flex items-center justify-center text-black w-2 h-2 lg:w-8 3xl:w-11 3xl:h-11 lg:h-8  ">
           <FaThLarge/>            
                </div>
                </div>
            </div>

            <div className="flex items-center  md:gap-3 3xl:gap-4">
              <div className="tooltip ">
                <div className="flex items-center justify-center text-black w-2 h-2 lg:w-8 3xl:w-11 3xl:h-11 lg:h-8  ">
              <IoNotificationsOutline/>
                </div>
                </div>
            </div>
            <div className="flex items-center  md:gap-3 3xl:gap-4">
              <div className="tooltip ">
                <div className="flex items-center justify-center text-black w-2 h-2 lg:w-8 3xl:w-11 3xl:h-11 lg:h-8  ">
                <IoSettingsOutline/>
                </div>
                </div>
            </div>
            <div className="flex items-center  md:gap-3 3xl:gap-4">
              <div className="tooltip  ml-3">
                <div className="flex items-center justify-center text-white w-6 h-6 lg:w-8 3xl:w-11 3xl:h-11 lg:h-8 rounded-full primary-notif-bg-color ">
                <img
              className={`mx-auto className="h-6 w-6 lg:h-6 lg:w-8 text-black" w-auto rounded-full `}
              src={dp1}
              alt="dp1"
            />{/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 lg:h-6 lg:w-8 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg> */}
                </div>
              </div>
            </div>
            {/* <hr className="w-px h-12 bg-gray-200 md:mx-3 mx-1" /> */}
          

          </div>
        </div>
      </div>
    </header>
  );
};
