import React, { useEffect } from "react";
import { useState } from "react";
const AuthContext = React.createContext();

export const ContextProvider = (props) => {
  const notShiftHover = `border border-double border-gray-400 bg-gradient-to-r from-white to-gray-400 w-14  h-5 text-center flex items-center justify-center cursor-default`;
  const ShiftHover = `border border-double border-gray-400 bg-gray-900 w-14 text-white  h-5 text-center flex items-center justify-center cursor-default`;
  const [captchaCodeCorrect, setCaptchaCodeCorrect] = useState(true);
  const [inputNumber, setInputNumber] = useState("");
  const [refreshButton, setRefresh] = useState(true);
  const [captchaCodeValue, setCaptchaCodeValue] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setUserPassword] = useState("");
  const [requirement, setRequirement] = useState(false);
  const [requirement1, setRequirement1] = useState(false);
  const [requirement2, setRequirement2] = useState(false);
  const [shiftClass, setShiftClass] = useState(notShiftHover);
  const [capitalizeButton, setCapitalizeButton] = useState(true);
  const [keyboardInput2, setKeyboardInput2] = useState("");
  const [keyboardInput, setKeyboardInput] = useState([]);
  const [keyBoardIconUserName, setKeyBoardIconUserName] = useState(false);
  const [keyBoardIconPassword, setKeyBoardIconPassword] = useState(false);
  const [keyBoardIconCaptcha, setKeyBoardIconCaptcha] = useState(false);
  const [userName_ForgetPass, setUserName_ForgetPass] = useState("");
  const [phoneNumber_ForgetPass, setPhoneNumber_ForgetPass] = useState("");
  const [personID_ForgetPass, setPersonID_ForgetPass] = useState("");
  const [captchaCode_ForgetPass, setCaptchaCode_ForgetPass] = useState("");
  const [phoneNumber_ForgetPhoneNumber, setPhoneNumber_ForgetPhoneNumber] =
    useState("");
  const [personID_ForgetPhoneNumber, setPersonID_ForgetPhoneNumber] =
    useState("");
  const [captchaCode_ForgetPhoneNumber, setCaptchaCode_ForgetPhoneNumber] =
    useState("");

  const [userName_ForgetPass_Requirement,setUserName_ForgetPass_Requirement]=useState(false)
  const [phoneNumber_ForgetPass_Requirement,setPhoneNumber_ForgetPass_Requirement]=useState(false)
  const [personID_ForgetPass_Requirement,setPersonID_ForgetPass_Requirement]=useState(false)
  const [captchaCode_ForgetPass_Requirement,setCaptchaCode_ForgetPass_Requirement]=useState(false)
  const [phoneNumber_ForgetPhoneNumber_Requirement,setPhoneNumber_ForgetPhoneNumber_Requirement]=useState(false)
  const [personID_ForgetPhoneNumber_Requirement,setPersonID_ForgetPhoneNumber_Requirement]=useState(false)
  const [captchaCode_ForgetPhoneNumber_Requirement,setCaptchaCode_ForgetPhoneNumber_Requirement]=useState(false)

  console.log(keyboardInput2, "second");
  console.log(keyboardInput, "first");

  let ali = "";
  let join = "";

  const keyBoardIconUserNameHandler = () => {
    /*const myFunction=setKeyBoardIconUserName(true);
    setTimeout(myFunction, 15000);*/
    setKeyBoardIconUserName(true);
  };

  const keyBoardIconPasswordHandler = () => {
    /*const myFunction=setKeyBoardIconUserName(true);
    setTimeout(myFunction, 15000);*/
    setKeyBoardIconPassword(true);
  };

  const keyBoardIconCaptchaNameHandler = () => {
    /*const myFunction=setKeyBoardIconUserName(true);
    setTimeout(myFunction, 15000);*/
    setKeyBoardIconCaptcha(true);
  };

  const saveButtonHandler = (event) => {
    if (event.target.innerHTML === "Enter") {
      if (keyBoardIconUserName === true) {
        setUserName(keyboardInput2);
        setKeyBoardIconUserName(false);
        setKeyboardInput([]);
        /*setKeyboardInput2("")*/
      }
      if (keyBoardIconPassword === true) {
        setUserPassword(keyboardInput2);
        setKeyBoardIconPassword(false);
        setKeyboardInput([]);
        /*setKeyboardInput2("")*/
      }
      if (keyBoardIconCaptcha === true) {
        setInputNumber(keyboardInput2);
        setKeyBoardIconCaptcha(false);
        setKeyboardInput([]);
        /*setKeyboardInput2("")*/
      }
    }

    if (event.target.innerHTML === "Enter") {
      return;
    }
    ali = event.target.innerHTML;
    console.log(ali);
    setKeyboardInput((prevState) => [...prevState, ali]);
    console.log(keyboardInput);
    join = keyboardInput.join("");
    console.log(join);
    setKeyboardInput2(join);
    console.log(keyboardInput2);
  };

  const HoverHandler = () => {
    setShiftClass(ShiftHover);
    setCapitalizeButton(false);
  };

  const offHoverHandler = () => {
    setShiftClass(notShiftHover);
    setCapitalizeButton(true);
  };

  const changeHandler2 = (event) => {
    if (
      event.target.id === "ForgetPass" &&
      event.target.placeholder === "شناسه کاربری"
    ) {
      setUserName_ForgetPass(event.target.value);
      console.log("ok");
      return;
    }
    if (
      event.target.id === "ForgetPass" &&
      event.target.placeholder === "کد ملی"
    ) {
      setPersonID_ForgetPass(event.target.value);
      console.log("کد ملی");
      return;
    }
    if (
      event.target.id === "ForgetPass" &&
      event.target.placeholder === "شماره همراه"
    ) {
      setPhoneNumber_ForgetPass(event.target.value);
      console.log("saeed");
      return;
    }

    if (
      event.target.id === "ForgetPass" &&
      event.target.placeholder === "کد امنیتی"
    ) {
      setCaptchaCode_ForgetPass(event.target.value);
      console.log("Ahmadfff");
      return;
    }

    if (
      event.target.id === "ForgetPhoneNumber" &&
      event.target.placeholder === "شماره همراه"
    ) {
      console.log("test");
      setPhoneNumber_ForgetPhoneNumber(event.target.value);
      
      return;
    }

    if (
      event.target.id === "ForgetPhoneNumber" &&
      event.target.placeholder === "کد ملی"
    ) {
      setPersonID_ForgetPhoneNumber(event.target.value);
      console.log("Ahmadfffییی");
      return;
    }

    if (
      event.target.id === "ForgetPhoneNumber" &&
      event.target.placeholder === "کد امنیتی"
    ) {
      setCaptchaCode_ForgetPhoneNumber(event.target.value);
      console.log("Ahmadfffییی");
      return;
    }

    setInputNumber(event.target.value);
    setRequirement(false);
  };

  const changeUserNameHandler = (event) => {
    setUserName(event.target.value);
    setRequirement1(false);
  };

  useEffect(() => {
    let alphaNums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let emptyArr = [];
    for (let i = 1; i <= 5; i++) {
      emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
    }
    let captchacodeVALUE = emptyArr.join("");
    setCaptchaCodeValue(captchacodeVALUE);
  }, []);

  useEffect(() => {
    join = keyboardInput.join("");
    setKeyboardInput2(join);
  }, [keyboardInput]);

  const resetHandler = (event) => {
    event.preventDefault("")
    if (event.target.id === "ForgetPass") {
      setUserName_ForgetPass("");
      setPhoneNumber_ForgetPass("");
      setPersonID_ForgetPass("");
      setCaptchaCode_ForgetPass("");
    }
    if (event.target.id === "ForgetPhoneNumber") {
      setPhoneNumber_ForgetPhoneNumber("");
      setPersonID_ForgetPhoneNumber("");
      setCaptchaCode_ForgetPhoneNumber("");
    }
  };

  const changePasswordHandler = (event) => {
    setUserPassword(event.target.value);
    setRequirement2(false);
  };
  const changeRefresh = () => {
    console.log("ali");
    setRefresh(!refreshButton);
    let alphaNums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let emptyArr = [];
    for (let i = 1; i <= 5; i++) {
      emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
    }
    let captchacodeVALUE = emptyArr.join("");
    setCaptchaCodeValue(captchacodeVALUE);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(event.target.id==="forgetPass"){
       if(userName_ForgetPass.trim().length===0){
        setUserName_ForgetPass_Requirement(true)
        return;
       }
       if(phoneNumber_ForgetPass.trim().length===0){
        phoneNumber_ForgetPass_Requirement(true)
        return;
       }
       if(personID_ForgetPass.trim().length===0){
        personID_ForgetPass_Requirement(true)
        return;
       }

       if(captchaCode_ForgetPass.trim().length===0){
        captchaCode_ForgetPass_Requirement(true)
        return;
       }
       if (captchaCode_ForgetPass === captchaCodeValue) {
        alert("true");
        setCaptchaCodeCorrect(true);
        setInputNumber("");
        setUserName("");
        setUserPassword("");
        let alphaNums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        let emptyArr = [];
        for (let i = 1; i <= 5; i++) {
          emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
        }
        let captchacodeVALUE = emptyArr.join("");
        setCaptchaCodeValue(captchacodeVALUE);
      } else {
        alert("false");
        setCaptchaCodeCorrect(false);
        setInputNumber("");
        setUserName("");
        setUserPassword("");
        let alphaNums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        let emptyArr = [];
        for (let i = 1; i <= 5; i++) {
          emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
        }
        let captchacodeVALUE = emptyArr.join("");
        setCaptchaCodeValue(captchacodeVALUE);
      }


    }

    if(event.target.id==="forgetPhoneNumber"){
      if(phoneNumber_ForgetPhoneNumber.trim().length===0){
        setPhoneNumber_ForgetPhoneNumber_Requirement(true)
       return;
      }
      if(personID_ForgetPhoneNumber.trim().length===0){
        personID_ForgetPhoneNumber_Requirement(true)
       return;
      }

      if(captchaCode_ForgetPhoneNumber.trim().length===0){
        captchaCode_ForgetPhoneNumber_Requirement(true)
       return;
      }


   }
    if (userName.trim().length === 0) {
      setRequirement1(true);
      return;
    }
    if (password.trim().length === 0) {
      setRequirement2(true);
      return;
    }
    if (inputNumber.trim().length === 0) {
      setRequirement(true);
      return;
    }
    if (inputNumber === captchaCodeValue) {
      alert("true");
      setCaptchaCodeCorrect(true);
      setInputNumber("");
      setUserName("");
      setUserPassword("");
      let alphaNums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      let emptyArr = [];
      for (let i = 1; i <= 5; i++) {
        emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
      }
      let captchacodeVALUE = emptyArr.join("");
      setCaptchaCodeValue(captchacodeVALUE);
    } else {
      alert("false");
      setCaptchaCodeCorrect(false);
      setInputNumber("");
      setUserName("");
      setUserPassword("");
      let alphaNums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      let emptyArr = [];
      for (let i = 1; i <= 5; i++) {
        emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
      }
      let captchacodeVALUE = emptyArr.join("");
      setCaptchaCodeValue(captchacodeVALUE);
    }
  };

  const KeyChangeHandler = (event) => {
    const ali = event.nativeEvent.data;
    console.log(ali);
    setKeyboardInput((prevState) => [...prevState, ali]);
  };

  return (
    <AuthContext.Provider
      value={{
        captchaCodeCorrect: captchaCodeCorrect,
        inputNumber: inputNumber,
        onSubmitHandler: submitHandler,
        onChangeHandler2: changeHandler2,
        onChangeRefresh: changeRefresh,
        captchacodeVALUE: captchaCodeValue,
        userName: userName,
        password: password,
        onChangeUserNameHandler: changeUserNameHandler,
        onChangePasswordHandler: changePasswordHandler,
        requirement: requirement,
        requirement1: requirement1,
        requirement2: requirement2,
        onHoverHandler: HoverHandler,
        shiftClass: shiftClass,
        offHoverHandler: offHoverHandler,
        capitalizeButton: capitalizeButton,
        onSaveButtonHandler: saveButtonHandler,
        keyboardInput: keyboardInput2,
        onKeyChangeHandler: KeyChangeHandler,
        keyBoardIconUserName: keyBoardIconUserName,
        keyBoardIconPassword: keyBoardIconPassword,
        keyBoardIconCaptcha: keyBoardIconCaptcha,
        onKeyBoardIconUserNameHandler: keyBoardIconUserNameHandler,
        onKeyBoardIconPasswordHandler: keyBoardIconPasswordHandler,
        onKeyBoardIconCaptchaNameHandler: keyBoardIconCaptchaNameHandler,
        userName_ForgetPass: userName_ForgetPass,
        phoneNumber_ForgetPass: phoneNumber_ForgetPass,
        personID_ForgetPass: personID_ForgetPass,
        captchaCode_ForgetPass: captchaCode_ForgetPass,
        phoneNumber_ForgetPhoneNumber: phoneNumber_ForgetPhoneNumber,
        personID_ForgetPhoneNumber: personID_ForgetPhoneNumber,
        captchaCode_ForgetPhoneNumber: captchaCode_ForgetPhoneNumber,
        onResetHandler: resetHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
