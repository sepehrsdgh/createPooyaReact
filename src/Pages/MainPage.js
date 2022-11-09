import RightSection from "../RightSection";
import LeftSection from "../LeftSection";

const MainPage = () => {
  return (
    <div className="flex flex-col mb-3 sm:flex-row sm:my-8 sm:flex sm:justify-center sm:items-center sm:h-screen lg:my-0 ">
      <RightSection />
      <LeftSection />
    </div>
  );
};

export default MainPage;
