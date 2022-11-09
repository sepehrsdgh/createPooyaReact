const LeftBottom = () => {
  const openWeb=()=>{
    window.open("https://ict.um.ac.ir/index.php/fa/?option=com_content&view=article&id=90&Itemid=284")
  }
  return (
    <div className="opacity-80 max-w-[504px] flex flex-col-reverse items-center text-center text-xs mt-4 sm:w-48 sm:my-auto md:w-64 font-iran ">
      <span className="text-[10px]">1381-1401</span>
      <span className="text-[11px] mt-1">
        مركز فناوری اطلاعات و ارتباطات دانشگاه فردوسی مشهد{" "}
      </span>
      <span className="text-[11px]">
        <span>هر گونه سوء استفاده از این سایت به استناد</span>
        <span onClick={openWeb} className="underline underline-offset-4 opacity-80 hover:opacity-100 transition-all duration-800 cursor-pointer">
          {" "}
          آیین نامه تخلفات رایانه ای
        </span>
        <span> تحت پیگرد قانونی قرار خواهد گرفت.</span>
      </span>
    </div>
  );
};

export default LeftBottom;

