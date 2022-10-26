import React from "react";
import { FaChartPie, FaUserFriends, FaAngleDown } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { IoIosAlbums } from "react-icons/io";
import { PieChart, Pie } from "recharts";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";
import { Button } from "react-scroll";

function Mainpage() {
  const data = [
    { name: "Geeksforgeeks", students: 400 },
    { name: "Technical scripter", students: 700 },
    { name: "Geek-i-knack", students: 200 },
    { name: "Geek-o-mania", students: 1000 },
  ];
  const data1 = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <>
    {/* grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 3xl:gap-3  */}
      <div className="mt-2 
      flex gap-2
      relative  ">
        <></>
    <div className=" rounded-xl 3xl:min-h-[350px] shadow-lg border border-gray-300 bg-white/75">
          
          <div className=" flex flex-col items-left pt-2 pb-3 px-6">

                <div className="flex">
                    <h>Top Product</h>
                     <p className="flex-end justify-self-right ml-10 items-right">
                        Weekly
                      </p>
                     <FaAngleDown className="flex-end justify-self-right ml-2s mt-2 items-right" />
                 </div>

                    <p className="w-full text-sm  text-left pt-6">
                       This Month
                        <br />
                        16,534
                    </p>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={500}
                height={400}
                data={data1}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  strokeDasharray="5 5"
                />
                <Line
                  type="monotone"
                  dataKey="Current"
                  stroke="#82ca9d"
                  strokeDasharray="3 4 5 2"
                />
                <Area
                  type="monotone"
                  dataKey="Previous"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          {/* <div className='items-Right  flex flex-col pt-2 pb-3'>
    <h className="text-md font "><BsThreeDots/></h>
    </div> */}
        </div>
        
        <div className="ml-2 rounded-xl 3xl:min-h-[350px] shadow-lg border border-gray-300 flex flex-col  items-left pt-2 pb-3 px-6 bg-white/75">
          <div className="flex">
            <h className="text-md font">Order Stats</h>
            <BsThreeDots className="flex-end justify-self-right ml-20 mt-2 items-right" />
          </div>

          <p className="w-full text-sm  text-left pt-6">
            This Month
            <br />
            16,534
          </p>
          <div>
            <PieChart width={200} height={200}>
              <Pie
                data={data}
                dataKey="students"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
              />
            </PieChart>
          </div>
        </div>
        <div className="
        rounded-xl 3xl:min-h-[350px] shadow-lg border border-gray-300 flex flex-col  items-left pt-2 pb-3 px-6 bg-white/75 ">
          <div className="flex ml-4">
            <h className="text-md font">Top Product</h>
            <p className="flex-end justify-self-right ml-20 items-right">
              Weekly
            </p>
            <FaAngleDown className="flex-end justify-self-right ml-2 mt-2 items-right" />
          </div>
          <div className="flex ml-4 ">
            <div className="bg-pop-yellow p-3  shadow-lg  primary-box-bg-color flex">
              <FaChartPie />
            </div>
            <p className="flex-end text-sm justify-self-right ml-6 items-right">
              Polo blue T-Shirt
            </p>
            <p className="flex-end justify-self-right ml-4  items-right">
              3.824
            </p>
          </div>
          <div className="flex ml-4 mt-2">
            <div className="bg-pop-yellow p-3  shadow-lg  primary-box-bg-color flex">
              <FaChartPie />
            </div>
            <p className="flex-end text-sm justify-self-right ml-6 items-right">
              Hoodle For Men
            </p>
            <p className="flex-end justify-self-right ml-4  items-right">
              3.82k
            </p>
          </div>
          <div className="flex mt-2 ml-4">
            <div className="bg-pop-yellow p-3  shadow-lg  primary-box-bg-color flex">
              <FaChartPie />
            </div>
            <p className="flex-end text-sm justify-self-right ml-6 items-right">
              Red colour Cap
            </p>
            <p className="flex-end justify-self-right ml-4  items-right">
              3.82k
            </p>
          </div>
          <div className="flex mt-2 ml-4">
            <div className="bg-pop-yellow p-3  shadow-lg  primary-box-bg-color flex">
              <FaChartPie />
            </div>
            <p className="flex-end text-sm justify-self-right ml-6 items-right">
              Pocket T-Shirt
            </p>
            <p className="flex-end justify-self-right ml-4  items-right">
              3.82k
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mainpage;
