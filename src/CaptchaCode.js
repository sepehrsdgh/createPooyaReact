import { useContext, useState } from "react";
import AuthContext from "./auth-context";
import refresh from "./icon svg/refresh-svgrepo-com(1).svg"
const CaptchaCode = (props) => {
  const ctx=useContext(AuthContext)
  const captchacodeVALUE=ctx.captchacodeVALUE
  return (
    <div className="flex items-center">
      <div className="bg p-1 w-auto border  captchabg">
        <p className={`mr-4 ml-2 text-lg inline-block rotate-[12deg]`}>{captchacodeVALUE[4]}</p>
        <p className={`mr-4 text-lg transform rotate-[45deg] inline-block`}>{captchacodeVALUE[3]}</p>
        <p className={`mr-4 text-lg transform rotate-[-45deg] inline-block`}>{captchacodeVALUE[2]}</p>
        <p className={`mr-4 text-lg transform rotate-[68deg] inline-block`}>{captchacodeVALUE[1]}</p>
        <p className={`mr-4 text-lg transform rotate-[8deg] inline-block`}>{captchacodeVALUE[0]}</p>
      </div>
      <img onClick={ctx.onChangeRefresh} src={refresh} className="w-5 rotate-135 mr-1 cursor-pointer"/>
    </div>
  );
};

export default CaptchaCode;
