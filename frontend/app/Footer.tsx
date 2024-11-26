import Image from "next/image";
import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { LiaTelegramPlane } from "react-icons/lia";
import { SlSocialInstagram } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="w-full bg-academy h-[459px] flex flex-col gap-12 justify-center items-center font-mycustom">
      <Image src="/footerlogo.png" alt="logo" width={75} height={82} />
      <ul className="w-96 text-white flex justify-between text-sm">
        <li className="flex  items-center">دوره ها</li>
        <li className="flex  items-center">دانش آموختگان</li>
        <li className="flex  items-center">سازمان ها</li>
        <li className="flex  items-center">بلاگ</li>
        <li className="flex  items-center">گزارش ها</li>
      </ul>
      <div className="flex flex-col gap-3">
        <div className="w-96 h-12 flex justify-between">
          <input
            type="text"
            className="h-full bg-lightaAcademy px-3 rounded-xl w-60"
            placeholder="ایمیل شما"
          />
          <button className="bg-white text-academy flex justify-center items-center w-28 rounded-xl">
            تایید
          </button>
        </div>
        <p className="text-lightaAcademy text-xs">
          *ایمیل شما نزد فرانت اند آکادمی محفوظ است.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <SlSocialInstagram className="w-6 h-6 text-lightaAcademy" />
        <CiLinkedin className="w-8 h-8 text-lightaAcademy" />
        <LiaTelegramPlane className="w-7 h-7 text-lightaAcademy" />
      </div>
    </div>
  );
};

export default Footer;
