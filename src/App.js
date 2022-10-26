import "./App.css";
import { Element } from "react-scroll";
import { Header } from "./templates/Header";
import { Sidebare } from "./templates/Sidebare";
import React from "react";
import { FaChartPie, FaUserFriends } from "react-icons/fa";
import { IoIosArchive } from "react-icons/io5";
import { IoIosAlbums } from "react-icons/io";
import Mainpage from "./templates/Mainpage";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import LeftSidebare from "./templates/LeftSidebare";

function App() {
  const data = [
    {
      name: "Feb",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Mar",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Apr",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "May",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Jun",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jul",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Aug",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Sep",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Oct",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div>
      <div className="flex max-w-screen-3xl  mr-auto">
        <div className="w-full ">
          <Element name="myScrollToElement"></Element>
          <div className="flex  overflow-hidden  ">
            <Sidebare />
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden rounded-xl  ">
              <Header />
              <main className="pb-10 ">
                <div className=" ml-2  ">
                  {/* //       */}
                  <div className="flex  ml-2  ">
                    {/* // */}
                    <div className="mt-2  grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 3xl:gap-9 gap-4 3xl:gap-9 relative ">
                      <div className="rounded-xl 3xl:min-h-[350px] shadow-lg border border-gray-300 flex flex-col pl-2 pt-2 pb-3  bg-white/75">
                        <div className="flex mt-4">
                          <div className="bg-pop-yellow p-3  shadow-lg  primary-box-bg-color flex">
                            <FaChartPie />
                          </div>
                          <p className="flex-end justify-self-right ml-2 items-right">
                            Revenue
                            <br />
                            <p className="text-sm font-bold">$21,456</p>
                          </p>
                          <p className="flex-end justify-self-right ml-10 mt-4 items-right ">
                            +2.56%
                          </p>
                        </div>
                      </div>

                      {/* // */}
                      {/* // */}
                      <div className="rounded-xl 3xl:min-h-[350px] shadow-lg border border-gray-300 flex flex-col pl-2 pt-2 pb-3  bg-white/75">
                        <div className="flex mt-4">
                          <div className="bg-pop-yellow p-3  shadow-lg  primary-box-bg-color flex">
                            <IoIosAlbums />
                          </div>
                          <p className="flex-end justify-self-right ml-2 items-right">
                            Orders
                            <br />
                            <p className="text-sm font-bold">$21,456</p>
                          </p>
                          <p className="flex-end justify-self-right ml-10 mt-4 items-right ">
                            -0.82%
                          </p>
                        </div>
                      </div>
                      {/* // */}

                      {/* // */}
                      <div className="rounded-xl 3xl:min-h-[350px] shadow-lg border border-gray-300 flex flex-col pl-2 pt-2 pb-3  bg-white/75">
                        <div className="flex mt-4">
                          <div className="bg-pop-yellow p-3  shadow-lg  primary-box-bg-color flex">
                            <IoIosAlbums />
                          </div>
                          <p className="flex-end justify-self-right ml-2 items-right">
                            Customers
                            <br />
                            <p className="text-sm font-bold">$21,456</p>
                          </p>
                          <p className="flex-end justify-self-right ml-10 mt-4 items-right ">
                            -1.04%
                          </p>
                        </div>
                      </div>
                      {/* // */}

                      {/* //over */}

                      <div className="  relative">
                        <div className="mt-2  flex relative ">
                          <div className="rounded-xl  shadow-lg border border-gray-300 flex flex-col pt-6 pb-3 px-6 bg-white/75">
                            <h className="text-md font items-left"> Overview</h>
                            <p className="w-full text-sm  text-left pt-6">
                              This Month
                              <br />
                              16,534
                            </p>
                            <div className="flex ml-4">
                            <div className="flex "><h className="p-3  flex">Orders<br/>5643</h>
                              <hr className="w-px h-12 bg-gray-200 md:mx-3 mx-1" />
                              <h className="p-3 flex-end justify-self-right ml-1 items-right">
                                Sales<br/>
                                <p className="">16273</p>
                              </h>
                             
                              
                             
                                </div>
                                
                              <div className="flex flex-end justify-self-right ml-8  items-right">
                                <BarChart
                                  className="mr-27"
                                  width={500}
                                  height={200}
                                  data={data}
                                >
                                  <XAxis
                                    dataKey="name"
                                    scale="point"
                                    padding={{ left: 10, right: 10 }}
                                  />
                                  <YAxis />
                                  <Tooltip />
                                  <Legend />
                                  <CartesianGrid strokeDasharray="3 3" />
                                  <Bar dataKey="uv" fill="#8884d8" />
                                </BarChart>
                              </div>
                              
                            </div>
                          </div>
                        </div>
                        <Mainpage />
                      </div>

                      {/* //over                   */}

                      {/* //main */}
                      {/* <Mainpage /> */}
                      <div></div>
                      {/* <div className=" ">
                    <Mainpage />
                  </div> */}
                    </div>

                    <div className="flex flex-right item-right mt-2 ml-2">
                      <LeftSidebare />
                    </div>
                  </div>

                  {/* //main */}
                </div>
              </main>
            </div>
          </div>

          <footer className="primary-Sid-bg-color p-5 mt-auto text-white">
            <p className=" text-center text-base">Copyright 2021-2022</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
