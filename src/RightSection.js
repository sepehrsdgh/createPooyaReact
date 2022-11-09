import CaptchaCode from "./CaptchaCode";
import logo from "./Images/university logo.png";
import Input from "./input";
import contact from "./icon svg/contacts-svgrepo-com.svg";
import lock from "./icon svg/lock-svgrepo-com.svg";
import exlamintion from "./icon svg/exclamation-mark-svgrepo-com.svg";
import keyboard from "./icon svg/keyboard-svgrepo-com.svg";
import { useState, useContext } from "react";
import AuthContext from "./auth-context";
import VirtualKeyBoard from "./VirtualKeyBoard";
import { Outlet, Link } from "react-router-dom";
const RightSection = () => {
  const ctx = useContext(AuthContext);
  return (
    <form
      onSubmit={ctx.onSubmitHandler}
      className="space-y-3 shadow-2xl max-w-lg px-6 py-12 pb-6 bg-gray-950 mx-auto mt-3 flex flex-col justify-center items-center sm:py-6 sm:ml-0 sm:mt-0 lg:px-[36px] lg:py-[48px]"
    >
      <img className="w-20" src={logo}></img>
      <h1 className="max-w-sm text-[16px] font-bold font-iran">
        پرتال ورود یکپارچه اعضا
      </h1>
      {!ctx.captchaCodeCorrect && (
        <span className="bg-red-200 w-full text-red-800 font-iran  text-sm   pt-3 pb-2 flex justify-center items-center">
          کد امنیتی اشتباه است.لطفا مجدد وارد نمایید.{" "}
        </span>
      )}
      <div className="bg-white relative flex w-full border border-gray-300 rounded-[2.8px] sm:w-auto md:w-[300px] lg:w-[360px] font-iran ">
        <input
          value={ctx.userName}
          onChange={ctx.onChangeUserNameHandler}
          type="text"
          placeholder="نام کاربری"
          className="w-full px-2 pt-[12px] pb-[8px] sm:pl-0 sm:max-w-[280px]  text-sm border-none outline-none md:py-3"
        />
        <div className="flex justify-end items-center   ">
          <img className="w-7  ml-2 cursor-pointer" src={keyboard} onClick={ctx.onKeyBoardIconUserNameHandler} />
          <img className="w-5 ml-4 lg:ml-0" src={contact} />
        </div>
        {ctx.requirement1 && (
          <span className="absolute top-11 py-4 px-4 rounded bg-white text-xs z-30 shadow-xl right-48">
            ورود این فیلد الزامی است.
          </span>
        )}
        {ctx.keyBoardIconUserName&&<VirtualKeyBoard />}
      </div>
      <div className="bg-white relative flex w-full border border-gray-300 rounded-[2.8px] sm:w-auto md:w-[300px] lg:w-[360px] font-iran ">
        <input
          onChange={ctx.onChangePasswordHandler}
          value={ctx.password}
          type="password"
          placeholder="رمز عبور"
          className="w-full px-2 pt-[12px] pb-[8px] sm:pl-0 sm:max-w-[280px]  text-sm border-none outline-none md:py-3"
        />
        <div className="flex justify-end items-center   ">
          <img className="w-7  ml-2 cursor-pointer" src={keyboard} onClick={ctx.onKeyBoardIconPasswordHandler} />
          <img className="w-5 ml-4 lg:ml-0" src={lock} />
        </div>
        {ctx.requirement2 && (
          <span className="absolute top-11 py-4 px-4 rounded bg-white text-xs z-30 shadow-xl right-48">
            ورود این فیلد الزامی است.
          </span>
        )}
        {ctx.keyBoardIconPassword&&<VirtualKeyBoard />}
      </div>
      <Input type="text" placeholder="کد امنیتی" icon={exlamintion} true={true} component="main" />
      <CaptchaCode />
      <p className="text-center text-sm -my-4 sm:w-64 md:w-72 lg:w-[370px] font-iran">
        کاراکترهایی که در تصویر مشاهده می نمایید در فیلد کد امنیتی به ترتیب وارد
        نمایید.
      </p>
      <div className="w-full text-center flex flex-col space-y-2  sm:flex-row sm:items-center sm:justify-between md:w-[340px] ">
        <button className="hover:bg-blue-600 transition-colors w-full bg-blue-950 p-2 text-white rounded sm:w-auto sm:py-2 sm:px-6 sm:mr-4 md:px-12 lg:px-16 lg:-mr-4 font-iran ">
          ورود
        </button>
        <Link to="/UserRecoveryPassForm" className="hover:underline cursor-pointer underline-offset-4 text-blue-500 text-xs xs:text-left sm:w-[44px] sm:ml-4 md:w-64 lg:-ml-4 font-iran ">
          فراموشی رمز ورود
        </Link>
      </div>
    </form>
  );
};

export default RightSection;
