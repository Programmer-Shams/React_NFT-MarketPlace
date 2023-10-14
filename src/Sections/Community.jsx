import React from "react";
import { Com } from "../assets/Images/Index";

const Community = () => {
  return (
    <section>
      <div className="flex items-center gap-5 p-10 rounded-2xl shadow-custom-shadow">
        <img src={Com} alt="" width={250}/>
        <div>
          <h1 className="text-light-purple text-3xl font-bold ">Join Our Community</h1>
          <p className="text-sm mt-5">
            Lorem ipsum dolor sit amet consectetur. Iaculis vestibulum purus
            facilisi ultrices sed faucibus proin cum ut.Lorem ipsum dolor sit
            amet consectetur. Iaculis vestibulum purus facilisi ultrices sed
            faucibus proin cum ut.
          </p>
          <div className="mt-3">
            <input type="text" placeholder="Enter you email address" className="p-1 text-sm outline-none rounded-sm px-2 bg-[#F1F1F2] w-[13rem]"/>
            <button className="bg-light-purple text-white p-1 rounded-lg text-sm px-3 ml-[-3px]">Get Email</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
