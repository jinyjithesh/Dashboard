import React from "react";
import { GrCircleInformation } from "react-icons/gr";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-scroll";
import { PieChart, Pie ,Cell,} from "recharts";
import dp1 from "../img/dp1.png";
import { FaAngleDown } from "react-icons/fa";
const LeftSidebare = () => {
    const data = [
        { name: 'Group A', value: 800 },
        { name: 'Group B', value: 200 },
      
      ];
      const COLORS = ['#0088FE','red' ,'white', ];
  return (
    <div className=" rounded-xl ">
      <div className="space-y-8 text-white primary-box-bg-color rounded-xl 3xl:min-h-[350px] shadow-lg border border-gray-300 flex flex-col  items-left pt-2 pb-3 px-6 bg-white/75 ">
    
      <BsThreeDots className="flex-end justify-self-right ml-40 mt-2 items-right" />
       
        <div className="flex justify-center items-center pt-6 pb-3 px-6 md:gap-3 3xl:gap-4  ">
        
          <div className="tooltip  flex items-center justify-center absolute mt-14">
            <div className="flex  text-black items-center justify-center text-white w-12 h-12 lg:w-16 3xl:w-22 3xl:h-22 lg:h-16 rounded-full bg-white    ">
            <img
              className={`mx-auto  w-10 h-10 lg:w-14 3xl:w-20 3xl:h-20 lg:h-14 w-auto rounded-full `}
              src={dp1}
              alt="dp1"
            />
            </div>
          </div>
        </div>
       
        
      </div>
      
          <h className="flex mt-10 text-md font-bold justify-center items-center ">
            Jennifer Bennett
          </h>
          
          <p className="flex  text-sm  justify-center items-center ">Product Designer</p>
     <div className="flex mt-4 justify-center items-center ">
<div className="flex flex-left">
    1269 <br/>
    Products
    </div>
<hr className="w-px h-12 bg-gray-200 md:mx-3 mx-1  ml-2" />
<div className="flex item-end  ">
    5.2k<br/>
    Followers
    </div>
    <hr className="w-px h-12 "/>
     </div>
     <div className="rounded-xl shadow-lg      bg-white/75">
          <div className="flex justify-center ">
            <h className="text-md font-bold">Earning</h>
            <GrCircleInformation className=" ml-20 mt-2 items-right"/>
           

          </div>

            <PieChart className=" justify-center items-center  left-16 top-4 "  width={200} height={50} >
           
                <Pie
          data={data}
          cx={50}
          cy={50}
          startAngle={180}
          endAngle={0}
          innerRadius={30}
          outerRadius={40}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
         
          
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}

        </Pie>
        
            </PieChart>
            <div className=" justify-center items-center ml-28   ">
            <p className="text-sm justify-center items-center font-bold">76%</p>
            </div>
            <h className="text-sm ml-24 font-bold ">$26,256</h><br/>
            <p className="text-sm ml-20">Earning this Month</p>
            <p className="text-sm ml-8 justify-center items-center">+2.65% From previous period</p> 
            <div className="rounded-xl 3xl:min-h-[350px] shadow-lg flex flex-col  items-left pt-2 pb-3 px-6 bg-white/75 ">
          <div className="flex mt-8">
            <h className="font-bold">Recent Activity</h>
          </div>
          <div className="flex mt-8">
            <div className=" text-sm bg-pop-yellow p-3  shadow-lg   flex">
             12<br/>Sep
            </div>
            <p className="flex ml-2">
              Responded to need "Volunteer Activities"
            </p>
          
          </div>
          <div className="flex mt-2">
            <div className="bg-pop-yellow p-3  shadow-lg   flex">
              {/* <FaChartPie /> */}11<br/>Sep
            </div>
            <p className="flex-end justify-self-right ml-1 items-right">
              Everyone relizes would be desirable<br/><Link className="text-bold text-blue">Read more</Link>
            </p>
        
         
          </div>
          <div className="flex mt-2">
            <div className="bg-pop-yellow p-3  shadow-lg   flex">
              {/* <FaChartPie /> */}10<br/>Sep
            </div>
            <p className="flex-end justify-self-right ml-1 items-right">
            Joined the group "Boardsmanship Forum"
            </p>
          
          </div>
         
        </div>
          
        </div>
       
    </div>
  );
};

export default LeftSidebare;
