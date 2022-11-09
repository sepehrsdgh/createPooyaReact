import LeftHand from "./icon svg/pointing-left-svgrepo-com.svg";
import phonebook from "./icon svg/phone-book-svgrepo-com.svg";
const Carousel = () => {
  const openWeb1 = () => {
    window.open(
      "https://ict.um.ac.ir/index.php?option=com_content&view=category&id=50&Itemid=377&lang=fa"
    );
  };

  const openWeb2 = () => {
    window.open("https://ict.um.ac.ir/index.php/fa/");
  };
  return (
    <div className="owl-carousel owl-theme w-[450px] font-iran sm:w-[190px]  lg:w-[310px] md:w-[280px] ">
      <div className=" max-w-md text-center text-[13px] sm:pt-0 md:px-4 item flex flex-col ">
        <h3 className="mb-2 sm:py-0 md:py-4 font-semibold">تلفن پشتیبانی</h3>
        <img className="h-7 mb-2 phonebook" src={phonebook} />
        <span>شماره داخلی 3030 </span>
        <span>خارج از دانشگاه 38808030-051</span>
      </div>
      <div className=" w-full text-center text-[13px] sm:pt-0 md:px-4 item">
        <h3 className="mb-2 sm:py-0 md:py-8 font-semibold">
          گزارش خطا (تیکتینگ){" "}
        </h3>
        <span>
          در صورتیکه با خطایی در سامانه ها برخورد کردید یا ابهامی در استفاده
          داشتید از طریق لینک{" "}
          <span className="text-amber-400 ml-1">تیکت (گزارش خطا)</span>که در
          گوشه بالا-چپ سامانه ها قرار دارد، مطلب خود را ارسال و پاسخ را از همان
          مسیر پیگیری کنید.
        </span>
      </div>
      <div className=" w-full text-center text-[13px] sm:pt-0 md:px-4 item">
        <h3 className="mb-2 sm:py-0 md:py-8 font-semibold">نظام پیشنهادها</h3>
        <span>
          با مراجعه به
          <span className="mr-1 text-amber-400">
            پورتال پویا/ لبه توسعه منابع/ تحول سازمانی/ ارائه پیشنهاد{" "}
          </span>
          پیشنهادات خود را برای بهبود سامانه ها یا خدمات فاوای دانشگاه ارسال
          نمایید.
        </span>
      </div>
      <div className=" w-full text-center text-[13px] sm:pt-0 md:px-4 item">
        <h3 className="mb-2 sm:py-0 md:py-8 font-semibold">درخواست توسعه</h3>
        <span>
          <span>
            درخواست طراحی یا تغییر سامانه ها بر اساس شیوه نامه بهبود فرآیندهای
            دانشگاه مندرج در منو
          </span>
          <span
            onClick={openWeb1}
            className="text-amber-400 mx-1 hover:text-amber-600 transition-all cursor-pointer "
          >
            دستورالعملها و فرآیندها/ نرم افزار
          </span>
          <span>سایت</span>
          <span
            onClick={openWeb2}
            className="text-amber-400 mx-1 hover:text-amber-600 transition-all cursor-pointer "
          >
            ict.um.ac.ir{" "}
          </span>
          انجام می شود.
        </span>
      </div>
    </div>
  );
};

export default Carousel;
