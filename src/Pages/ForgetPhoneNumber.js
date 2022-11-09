import CaptchaCode from "../CaptchaCode";
import logo from "../Images/university logo.png";
import Input from "../input";
import contact from "../icon svg/contacts-svgrepo-com.svg";
import lock from "../icon svg/lock-svgrepo-com.svg";
import exlamintion from "../icon svg/exclamation-mark-svgrepo-com.svg";
import cellphone from "../icon svg/cell-phone-svgrepo-com.svg";
import keyboard from "../icon svg/keyboard-svgrepo-com.svg";
import { useState, useContext } from "react";
import AuthContext from "../auth-context";
import VirtualKeyBoard from "../VirtualKeyBoard";
const ForgetPhoneNumber = () => {
  const ctx = useContext(AuthContext);
  return (
    <form
      onSubmit={ctx.onSubmitHandler}
      className="space-y-3 shadow-2xl max-w-lg px-6 py-12 pb-6 bg-gray-950 mx-auto mt-3 flex flex-col justify-center items-center sm:py-6  "
      
    >
      <img className="w-20" src={logo}></img>
      <h1 className="text-gray-700 max-w-sm text-[16px] font-bold font-iran">
        پرتال ورود یکپارچه اعضا
      </h1>
      <h4 className="text-gray-900  max-w-sm text-[14px] font-medium font-iran">
        بازیابی شماره دانشجویی و رمز عبور
      </h4>
      <div className="w-full text-center font-iran bg-amber-100 text-yellow-700 py-4 px-14 text-[13px] ">
        این امکان تنها برای دانشجویان فارغ‌التحصیل فعال است
      </div>
      <div className="w-full text-center font-iran bg-amber-100 text-yellow-700 py-4 px-10 text-[13px]">
        لطفا قبل از تکمیل فرم از مالکیت شماره تلفن همراه و انطباق آن با کد ملی
        اطمینان حاصل فرمایید.
      </div>
      <div className="w-full sm:flex sm:flex-col">
        <div className="sm:flex sm:flex-row">
          <Input
            type="text"
            placeholder="شماره همراه"
            icon={cellphone}
            width="w-6"
            component="ForgetPhoneNumber"
          />
          <Input
            type="text"
            placeholder="کد ملی"
            icon={contact}
            width="w-6"
            component="ForgetPhoneNumber"
          />
        </div>
        <div id="mute2">
          <Input
            id="mute"
            type="text"
            placeholder="کد امنیتی"
            icon={exlamintion}
            width="w-5"
            component="ForgetPhoneNumber"
          />
        </div>
      </div>
      <CaptchaCode />
      <div className="w-full text-center flex flex-col space-y-0  sm:flex-row sm:items-center sm:justify-between ">
        <button className="hover:bg-blue-600 transition-colors w-full bg-blue-950 p-2 text-white rounded sm:w-auto sm:py-2 sm:px-6 sm:mr-4  font-iran ">
          بازیابی رمز عبور
        </button>
        <button
          id="ForgetPhoneNumber"
          onClick={ctx.onResetHandler}
          className="hover:bg-gray-600 transition-colors w-full bg-gray-500 p-2 text-white rounded sm:w-auto sm:py-2 sm:px-6 sm:mr-4  font-iran "
        >
          پاک کردن فرم
        </button>
      </div>
    </form>
  );
};

export default ForgetPhoneNumber;
