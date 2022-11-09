import { useContext } from "react";
import AuthContext from "./auth-context";

const VirtualKeyBoardButton = (props) => {
    const ctx=useContext(AuthContext)
   
    
  return (
    <div
      className={`border border-double border-gray-400 bg-gradient-to-r from-white to-gray-400 w-5  ${props.width} ${props.text}  h-5 text-center flex items-center justify-center cursor-default`}
      onClick={ctx.onSaveButtonHandler}
    >
      {props.children}
    </div>
  );
};

export default VirtualKeyBoardButton;
