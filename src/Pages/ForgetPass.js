import CaptchaCode from "../CaptchaCode";
import logo from "../Images/university logo.png";
import Input from "../input";
import contact from "../icon svg/contacts-svgrepo-com.svg";
import lock from "../icon svg/lock-svgrepo-com.svg";
import exlamintion from "../icon svg/exclamation-mark-svgrepo-com.svg";
import keyboard from "../icon svg/keyboard-svgrepo-com.svg";
import cellphone from "../icon svg/cell-phone-svgrepo-com.svg";
import { useState, useContext } from "react";
import AuthContext from "../auth-context";
import VirtualKeyBoard from "../VirtualKeyBoard";
import { Link } from "react-router-dom";
const ForgetPass = () => {
  const ctx = useContext(AuthContext);
  return (
    <form
      onSubmit={ctx.onSubmitHandler}
      className="space-y-3 shadow-2xl max-w-lg px-6 py-12 pb-6 bg-gray-950 mx-auto mt-3 flex flex-col justify-center items-center "
    >
      <img className="w-20 " src={logo}></img>
      <h1 className="text-gray-700 max-w-sm text-[16px] font-bold font-iran">
        پرتال ورود یکپارچه اعضا
      </h1>
      <h4 className="text-gray-700  max-w-sm text-[14px] font-bold font-iran">
        بازیابی رمز عبور
      </h4>
      <div className="w-full sm:w-[460px] sm:flex sm:flex-row ">
        <div className="relative sm:flex sm:flex-col sm:pl-4 ">
          <Input
            type="text"
            placeholder="شناسه کاربری"
            icon={contact}
            true={false}
            width="w-7"
            component="ForgetPass"
          />
          <Link
            to="/StNoAndPassRecovery"
            className="inline-block self-start text-sky-600 font-iran text-sm my-3 hover:underline underline-offset-2 hover:text-sky-800 transition-colors "
          >
            فراموشی شماره دانشجویی{" "}
          </Link>
          {ctx.UserName_ForgetPass_Requirement&&<div>1</div>}
        </div>
        <div>
          <Input
            type="text"
            placeholder="شماره همراه"
            icon={cellphone}
            width="w-7"
            component="ForgetPass"
          />
        </div>
      </div>
      <div className="w-full sm:w-[460px] sm:flex sm:flex-row ">
        <div className="sm:flex sm:flex-col sm:pl-4 ">
          <Input
            type="text"
            placeholder="کد ملی"
            icon={contact}
            width="w-7"
            component="ForgetPass"
          />
          <span className="inline-block self-start text-xs font-iran text-gray-500 my-3">
            دانشجویان خارجی نیاز به وارد کردن کد ملی ندارند
          </span>
        </div>
        <div>
          <Input
            type="text"
            placeholder="کد امنیتی"
            icon={exlamintion}
            component="ForgetPass"
          />
          <span className="self-start text-xs font-iran text-gray-500 my-3 ">
            کد امنیتی به بزرگی و کوچکی حروف حساس است
          </span>
        </div>
      </div>
      <CaptchaCode />
      <div className="w-full text-center flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center  ">
        <button className="hover:bg-blue-600 transition-colors w-full bg-blue-950 p-2 text-white rounded sm:w-full sm:p-2 sm:mr-4  font-iran ">
          بازیابی رمز عبور
        </button>
        <button
          id="ForgetPass"
          onClick={ctx.onResetHandler}
          className="hover:bg-gray-600 transition-colors w-full bg-gray-500 p-2 text-white rounded sm:w-full  sm:mr-4 sm:p-2 sm:mt-0  font-iran sm:self-center "
        >
          پاک کردن فرم
        </button>
      </div>
    </form>
  );
};

export default ForgetPass;
