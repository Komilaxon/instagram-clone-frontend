import React from "react";
import { Link } from "react-router-dom";
import Img from "/assets/abdulaziz.jpg";

interface RightSider {
  img: string;
  title: string;
  text: string;
  url: string;
  subScribe: string;
}

export const RightSiderCard: React.FC<RightSider> = ({
  title,
  text,
  subScribe,
  url,
}) => {
  return (
    <div className="">
      <div className="flex items-center">
        <div className="w-[44px] h-[44px] rounded-full ">
          <img className="object-cover rounded-full" src={Img} alt="img" />
        </div>
        <div className="pl-5">
          <Link to={url}>
            <h4 className="text-sm text-[#000] font-semibold cursor-pointer">
              {title}
            </h4>
          </Link>
          <span className="text-xs text-[#838383]">{text}</span>
        </div>
        <div className="block ml-auto">
          <Link to={"/"}>
            <span className="font-semibold text-xs text-[#0095F6]">
              {subScribe}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
