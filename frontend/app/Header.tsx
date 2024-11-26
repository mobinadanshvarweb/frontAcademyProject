import Image from "next/image";
import React from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";

const Header = () => {
  return (
    <div className="w-full flex flex-col font-mycustom">
      <div className="w-full h-[50px] bg-academy px-32 flex items-center">
        <div className="w-1/2  flex gap-6 items-center justify-start cursor-default ">
          <div className="flex gap-1 text-white text-sm items-center">
            Email: pjsofts@gmail.com
            <MdEmail className="h-4 w-4  text-lightAcademy" />
          </div>
          <div className="flex gap-1 text-white text-sm items-center">
            ۹۸ ۷۶ ۵۴۳ ۰۹۱۲
            <LuPhoneCall className="h-4 w-4 text-lightAcademy" />
          </div>
        </div>
        <div className="w-1/2  flex items-center justify-end">
          <button className="w-32 text-sm hover:bg-lightAcademy hover:text-academy text-white h-[50px] duration-300 flex justify-center items-center gap-1">
            ورود / ثبت نام
          </button>
          <button className="w-32 text-sm hover:bg-lightAcademy hover:text-academy text-white h-[50px] duration-300 flex justify-center items-center ">
            <span className="flex items-center"> نمایش دوره ها</span>
            <FaArrowLeft className="w-4 h-4 mr-1  text-academy" />
          </button>
        </div>
      </div>
      <div className="w-full h-[90px] shadow-custom px-32 flex items-center ">
        <div className="flex-1 flex gap-20 items-center ">
          <Image src="/logo.png" alt="logo" width={77} height={31} />
          <ul className="text-academy flex gap-5 items-center text-sm cursor-default">
            <li className="flex  items-center">
              دوره ها
              <TiArrowSortedDown className="w-3 h-3 mr-1 text-lightAcademy" />
            </li>
            <li className="flex  items-center">
              دانش آموختگان
              <TiArrowSortedDown className="w-3 h-3 mr-1 text-lightAcademy" />
            </li>
            <li className="flex  items-center">
              سازمان ها
              <TiArrowSortedDown className="w-3 h-3 mr-1 text-lightAcademy" />
            </li>
            <li className="flex  items-center">
              بلاگ
              <TiArrowSortedDown className="w-3 h-3 mr-1 text-lightAcademy" />
            </li>
            <li className="flex  items-center">
              گزارش ها
              <TiArrowSortedDown className="w-3 h-3 mr-1 text-lightAcademy" />
            </li>
          </ul>
        </div>
        <div className="flex gap-4 ">
          <CiShoppingCart className="w-5 h-5 text-aAcademy" />
          <CiSearch className="w-5 h-5 text-aAcademy" />
        </div>
      </div>
    </div>
  );
};

export default Header;
