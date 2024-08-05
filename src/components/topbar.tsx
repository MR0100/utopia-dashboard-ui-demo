import Image from "next/image";
import MyIcon from "./my_icon";

export default function TopBar() {
  return (
    <div className="w-full h-[6vh] px-[30px] py-[16px] border-b-[#CED8E5] border-b-[1px]">
      <div className="w-full h-full flex flex-row justify-between items-center ">
        {/* Search Bar ---- [BEGIN]*/}
        <div className="w-[25%] px-[16px] py-[6px] rounded-md border-[#EBEDF2] border-[1px] bg-[#F5F6F8] flex flex-row items-center">
          <Image
            src="/svg/search-normal.svg"
            alt="Logo"
            width={24}
            height={24}
            className="mr-[12px]"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full bg-[#F5F6F8] outline-none text-[#495D72] placeholder-[#495D72] text-[14px]"
          />
        </div>
        {/* Search Bar ---- [END] */}
        <div className="flex flex-row gap-[30px] items-center">
          <MyIcon src="/svg/messages.svg" alt="Bell" />
          <MyIcon src="/svg/notification-bold.svg" alt="Bell" />
          <Image
            src="/images/profile.jpg"
            alt="Profile"
            width={36}
            height={36}
            className="rounded-full h-[36px] w-[36px]"
          />
        </div>
      </div>
    </div>
  );
}
