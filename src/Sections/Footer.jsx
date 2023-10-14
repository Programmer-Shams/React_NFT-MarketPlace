import React from "react";
import { NFTLogo } from "../assets/Images/Index";
import { Instagram, LinkindIn, Twitter, Youtube } from "../assets/Icons";
import { FooterLinks1, FooterLinks2 } from "../Constant/Constant";

const Footer = () => {
  return (
    <section>
      <div className="bg-[#202020] w-full h-[45vh] py-10 px-20">
        <div className="flex justify-between mb-8">
          <div className="flex gap-5 text-center items-center">
            <img src={NFTLogo} width={35} height={35} alt="Logo" />
            <h1 className="text-light-purple text-xl">NFT logoplace</h1>
          </div>
          <div className="flex">
            <img src={Instagram} />
            <img src={Twitter} />
            <img src={LinkindIn} />
            <img src={Youtube} />
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-center">
          <p className="text-white text-sm mt-8 w-[50%]">
          Lorem ipsum dolor sit amet consectetur. <br /> Iaculis vestibulum purus facilisi ultrices sed faucibus <br /> proin cum ut.
          </p>
          <div className="w-[50%] flex justify-around items-center mt-10">
            <div>
            {
                FooterLinks1.map((link) =>(
                    <div>
                        <h1 className="text-light-purple pb-1">{link.header}</h1>
                        <p className="text-white text-sm">{link.name}</p>
                    </div>
                ))
            }
            </div>
            <div>
            {
                FooterLinks2.map((link) =>(
                    <div>
                        <h1 className="text-light-purple pb-1">{link.header}</h1>
                        <p className="text-white text-sm">{link.name}</p>
                    </div>
                ))
            }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
