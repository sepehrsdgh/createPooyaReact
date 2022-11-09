import Carousel from "./Carousel";
import logo from "./Images/logo.png";
import LeftBottom from "./LeftBottom";
const LeftSection = () => {
    const openWeb=()=>{
        window.open("https://logo.samandehi.ir/Verify.aspx?id=1022805&p=rfthobpduiwkuiwkmcsiobpddshw","width=100px", "height=400px")
    }
  return (
    <div className="bg-blue-950 shadow-2xl text-white  mt-0 px-[21px] py-12 pb-6 mx-auto flex flex-col justify-center items-center  sm:mr-0  sm:w-[210px] sm:pt-[28px] md:w-[280px] lg:w-[320px] lg:py-[24px]">
      <Carousel />
      <img
        className="w-[80px] self-center mt-10 lg:mt-28 opacity-50 hover:opacity-100 transition-all duration-500 cursor-pointer"
        src={logo}
        onClick={openWeb}
      />
      <LeftBottom />
    </div>
  );
};

export default LeftSection;
