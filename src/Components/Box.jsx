import React from "react";
import { NFT1 } from "../assets/Images/Index";
import { futuredNFTs } from "../Constant/Constant";
import PlaceBid from "./PlaceBid";
const Box = ({ colorStyle }) => {
  return (
    <div>
      <div className="flex">
        {futuredNFTs.map((box) => (
          <div className=" p-2 bg-white border-[#F1F1F2] border-[1px] rounded-[15px] w-full ml-4">
            <img
              src={box.imgURL}
              alt=""
              width={230}
              className="items-center text-center"
            />
            <h3 className="text-light-purple font-bold text-xl py-4">
              {box.name}
            </h3>
            <div className="flex border-b-[1px] border-slate-gray items-center pb-2">
              <div className="flex">
                <img src={box.prof1} width={40} />
                <img src={box.prof2} width={40} className=" ml-[-1.5rem]" />
              </div>
              <p className="text-sm">{box.subText}</p>
            </div>
            <div className="flex w-full  justify-between text-center items-center mt-2">
              <div className=" w-[50%]">
                <p className=" text-sm text-slate-gray">Current Bid:</p>
                <img src={""} alt="" />
                <p className="text-sm">{`${box.Price} ETH`}</p>
              </div>
              <div>
                <PlaceBid />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Box;
