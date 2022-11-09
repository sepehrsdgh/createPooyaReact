import { useContext, useState } from "react";
import AuthContext from "./auth-context";
import keyboard from "./icon svg/keyboard-svgrepo-com.svg";
import VirtualKeyBoard from "./VirtualKeyBoard";

const Input = (props) => {
  let inputTailwind = "";
  let divInputTailwind=""
  let imageTailwind=""
  if (props.component === "main") {
    divInputTailwind="bg-white relative flex w-full sm:w-[280px] md:w-[300px] lg:w-[360px] border border-gray-300 rounded-[2.8px]   font-iran "
    inputTailwind =
    "w-full px-2 pt-[12px] pb-[8px] sm:pl-0 sm:max-w-[280px]  text-sm border-none outline-none md:py-3"
    imageTailwind=`w-5 ml-4 sm:block sm:ml-4  ${props.width}  `
  }

  if (props.component === "ForgetPass") {
    divInputTailwind="bg-white relative flex  border border-gray-300 rounded-[2.8px]   font-iran "
    inputTailwind =
    "w-full px-2 pt-[12px] pb-[8px] sm:pl-0 sm:w-[200px]  text-sm border-none outline-none  "
    imageTailwind=`w-5 ml-4 sm:block sm:ml-1  ${props.width}  `
  }

  if(props.component==="ForgetPhoneNumber"){
    divInputTailwind="bg-white relative flex  border border-gray-300 rounded-[2.8px]   font-iran mute "
    inputTailwind =
    "w-full px-2 pt-[12px] pb-[8px] sm:pl-0 sm:w-[200px]  text-sm border-none outline-none  "
    imageTailwind=`w-5 ml-4 sm:block sm:ml-1  ${props.width}  `
  }
  
  const ctx = useContext(AuthContext);
  let value = "";
  if (
    props.component === "ForgetPass" &&
    props.placeholder === "شناسه کاربری"
  ) {
    value = ctx.userName_ForgetPass;
  }
  if (props.component === "ForgetPass" && props.placeholder === "شماره همراه") {
    console.log("ahmadi");
    value = ctx.phoneNumber_ForgetPass;
  }
  if (props.component === "ForgetPass" && props.placeholder === "کد ملی") {
    value = ctx.personID_ForgetPass;
  }

  if (props.component === "ForgetPass" && props.placeholder === "کد امنیتی") {
    console.log("ali");
    value = ctx.captchaCode_ForgetPass;
  }

  if (
    props.component === "ForgetPhoneNumber" &&
    props.placeholder == "شماره همراه"
  ) {
    console.log("ali");
    value = ctx.phoneNumber_ForgetPhoneNumber;
  }

  if (
    props.component === "ForgetPhoneNumber" &&
    props.placeholder === "کد ملی"
  ) {
    console.log("ali");
    value = ctx.personID_ForgetPhoneNumber;
  }

  if (
    props.component === "ForgetPhoneNumber" &&
    props.placeholder === "کد امنیتی"
  ) {
    console.log("ali");
    value = ctx.captchaCode_ForgetPhoneNumber;
  }
  if (props.component === "main") {
    value = ctx.inputNumber;
  }

  return (
    <div className={divInputTailwind}>
      <input
        value={value}
        onChange={ctx.onChangeHandler2}
        type={props.type}
        placeholder={props.placeholder}
        className={inputTailwind}
        id={props.component}
      />
      <div className="flex justify-end items-center   ">
        {props.true && (
          <img
            className="w-7  ml-2 cursor-pointer"
            src={keyboard}
            onClick={ctx.onKeyBoardIconCaptchaNameHandler}
          />
        )}
        <img className={imageTailwind} src={props.icon} />
      </div>
      {ctx.requirement && (
        <span className="absolute top-11 py-4 px-4 rounded bg-white text-xs z-30 shadow-xl right-48">
          ورود این فیلد الزامی است.
        </span>
      )}
      {ctx.keyBoardIconCaptcha && <VirtualKeyBoard />}
    </div>
  );
};

export default Input;
