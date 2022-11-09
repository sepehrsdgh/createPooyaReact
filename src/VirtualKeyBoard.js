import { useContext } from "react";
import AuthContext from "./auth-context";
import VirtualKeyBoardButton from "./VirtualKeyBoardButton";
const VirtualKeyBoard = () => {
  const ctx = useContext(AuthContext);
  return (
    <form className="shadow-2xl transition absolute z-30 bottom-[0px] right-[135px]  flex flex-col  mt-4  w-[350px] items-center pb-4 bg-gray-300 ">
      <input onChange={ctx.onKeyChangeHandler} value={ctx.keyboardInput}  className="w-64 mb-4 border-4 border-gray-500 border-double mt-2  " />
      <div className="flex flex-col text-sm ">
        <div className="flex flex-row-reverse ">
          <VirtualKeyBoardButton>{ctx.capitalizeButton&&"`"||"~"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton>{ctx.capitalizeButton&&"1"||"!"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton>{ctx.capitalizeButton&&"2"||"@"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton>{ctx.capitalizeButton&&"3"||"#"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton>{ctx.capitalizeButton&&"4"||"$"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton>{ctx.capitalizeButton&&"5"||"%"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton>{ctx.capitalizeButton&&"6"||"^"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton>{ctx.capitalizeButton&&"7"||"&"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton>{ctx.capitalizeButton&&"8"||"*"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton>{ctx.capitalizeButton&&"9"||"("}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton>{ctx.capitalizeButton&&"0"||")"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton>{ctx.capitalizeButton&&"-"||"_"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton>{ctx.capitalizeButton&&"="||"+"}</VirtualKeyBoardButton>
          <div className="border border-double border-gray-400 bg-gradient-to-r from-white to-gray-400 w-14 h-5 text-center flex items-center justify-center">
            BackSp
          </div>
        </div>
        <div className="flex flex-row-reverse  ">
          <VirtualKeyBoardButton width="w-7">Tab</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-5">{ctx.capitalizeButton&&"q"||"Q"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-5">{ctx.capitalizeButton&&"w"||"W"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-5">{ctx.capitalizeButton&&"e"||"E"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-5">{ctx.capitalizeButton&&"r"||"R"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-5">{ctx.capitalizeButton&&"t"||"T"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-5">{ctx.capitalizeButton&&"y"||"Y"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-5">{ctx.capitalizeButton&&"u"||"U"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-5">{ctx.capitalizeButton&&"i"||"I"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-5">{ctx.capitalizeButton&&"o"||"O"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-5">{ctx.capitalizeButton&&"p"||"P"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-5">{ctx.capitalizeButton&&"["||"{"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-5">{ctx.capitalizeButton&&"]"||"}"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-12">{ctx.capitalizeButton&&"/"||"|"}</VirtualKeyBoardButton>
        </div>

        <div className="flex flex-row-reverse ">
          <VirtualKeyBoardButton width="w-10">Caps</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-5">{ctx.capitalizeButton&&"a"||"A"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-5">{ctx.capitalizeButton&&"s"||"S"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-5">{ctx.capitalizeButton&&"d"||"D"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-5">{ctx.capitalizeButton&&"f"||"F"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-5">{ctx.capitalizeButton&&"g"||"G"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-5">{ctx.capitalizeButton&&"h"||"H"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-5">{ctx.capitalizeButton&&"j"||"J"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-5">{ctx.capitalizeButton&&"k"||"K"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-5">{ctx.capitalizeButton&&"l"||"L"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-5">{ctx.capitalizeButton&&";"||":"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-5">{ctx.capitalizeButton&&"'"||"'"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-[56px]">Enter</VirtualKeyBoardButton>
        </div>

        <div className="flex flex-row-reverse ">
          <div
            onMouseMoveCapture={ctx.onHoverHandler}
            onMouseOutCapture={ctx.offHoverHandler}
            className={ctx.shiftClass}
          >
            Shift
          </div>
          <VirtualKeyBoardButton width="w-5">{ctx.capitalizeButton&&"z"||"Z"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-6">{ctx.capitalizeButton&&"x"||"X"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-5">{ctx.capitalizeButton&&"c"||"C"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-5">{ctx.capitalizeButton&&"v"||"V"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-5">{ctx.capitalizeButton&&"b"||"B"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-5">{ctx.capitalizeButton&&"n"||"N"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-5">{ctx.capitalizeButton&&"m"||"M"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-5">{ctx.capitalizeButton&&","||"<"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-5">{ctx.capitalizeButton&&"."||">"}</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-5">{ctx.capitalizeButton&&"/"||"?"}</VirtualKeyBoardButton>
          <div
            onMouseMoveCapture={ctx.onHoverHandler}
            onMouseOutCapture={ctx.offHoverHandler}
            className={ctx.shiftClass}
          >
            Shift
          </div>
        </div>

        <div className="flex flex-row-reverse ">
          <VirtualKeyBoardButton width="w-12" text="text-[12px]">
            Control
          </VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-10">Alt</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-36"></VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-10">Alt</VirtualKeyBoardButton>
          <VirtualKeyBoardButton width="w-11" text="text-[11px]">
            Control
          </VirtualKeyBoardButton>
        </div>
      </div>
    </form>
  );
};

export default VirtualKeyBoard;
