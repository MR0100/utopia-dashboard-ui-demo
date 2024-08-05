import Image from "next/image";
import MyIcon from "./my_icon";

export default function SideBar() {
  let acadamicItems = [
    {
      name: "Schedule",
      icon: "/svg/menu-board.svg",
    },
    {
      name: "Exam Board",
      icon: "/svg/note-2.svg",
    },
    {
      name: "Homeworks",
      icon: "/svg/clipboard-text.svg",
    },
    {
      name: "Grade Report",
      icon: "/svg/trend-up.svg",
    },
    {
      name: "Enrolled Courses",
      icon: "/svg/book.svg",
    },
    {
      name: "Course Plan",
      icon: "/svg/archive-book.svg",
    },
    {
      name: "Attendance",
      icon: "/svg/calendar-tick.svg",
    },
    {
      name: "Libraries",
      icon: "/svg/libraries.svg",
    },
  ];

  let administrative = [
    {
      name: "Finance",
      icon: "/svg/dollar-square.svg",
    },
    {
      name: "Announcements",
      icon: "/svg/alarm.svg",
    },
  ];

  let settings = [
    {
      name: "Account Settings",
      icon: "/svg/setting-2.svg",
    },
    {
      name: "Notification Preferences",
      icon: "/svg/notification.svg",
    },
  ];
  return (
    <div className="w-[335px] h-screen bg-[#0C1E33] overflow-auto">
      <div className="h-[68px] border-b-[#ffffff30] border-b-[1px] pl-[30px] py-[16px] flex items-center justify-start">
        <Image src={"/png/logo.png"} alt="logo" width={87} height={24} />
      </div>
      <div className="border-b-[#ffffff30] border-b-[1px] pl-[30px] py-[30px] flex items-center justify-start">
        <div className="h-min w-full bg-red flex flex-row items-center justify-start text-white gap-[6px] bg-gradient-to-r from-[#ffffff20] before:h-full before:w-[4px] before:bg-white before:rounded-l-lg before:absolute relative">
          <MyIcon
            src="/svg/element-4.svg"
            alt="Dashboard"
            height={24}
            width={24}
            className="pl-[4px]"
          />
          <p className="text-[14px] font-medium">Dashboard</p>
        </div>
      </div>
      <div className="border-b-[#ffffff30] border-b-[1px] pl-[30px] py-[30px] flex items-center justify-start flex-col gap-2">
        <div className="h-min w-full bg-red pb-[15px] flex flex-row items-center justify-start text-white">
          <p className="text-[12px] font-medium">ACADEMIC</p>
        </div>
        {acadamicItems.map((item, index) => (
          <div
            key={index}
            className="h-min w-full bg-red flex flex-row items-center justify-start text-white gap-[6px] hover:bg-gradient-to-r hover:from-[#ffffff20] hover:before:h-full hover:before:w-[4px] hover:before:bg-white hover:before:rounded-l-lg hover:before:absolute relative"
          >
            <MyIcon
              src={item.icon}
              alt={item.name}
              height={24}
              width={24}
              className="pl-[4px]"
            />
            <p className="text-[14px] font-medium">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="border-b-[#ffffff30] border-b-[1px] pl-[30px] py-[30px] flex items-center justify-start flex-col gap-2">
        <div className="h-min w-full bg-red pb-[15px] flex flex-row items-center justify-start text-white gap-[12px]">
          <p className="text-[12px] font-medium">ADMINISTRATIVE</p>
        </div>
        {administrative.map((item, index) => (
          <div
            key={index}
            className="h-min w-full bg-red flex flex-row items-center justify-start text-white gap-[6px] hover:bg-gradient-to-r hover:from-[#ffffff20] hover:before:h-full hover:before:w-[4px] hover:before:bg-white hover:before:rounded-l-lg hover:before:absolute relative"
          >
            <MyIcon
              src={item.icon}
              alt={item.name}
              height={24}
              width={24}
              className="pl-[4px]"
            />
            <p className="text-[14px] font-medium">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="border-b-[#ffffff30] border-b-[1px] pl-[30px] py-[30px] flex items-center justify-start flex-col gap-2">
        <div className="h-min w-full pb-[15px] bg-red flex flex-row items-center justify-start text-white gap-[12px]">
          <p className="text-[12px] font-medium">SETTINGS</p>
        </div>
        {settings.map((item, index) => (
          <div
            key={index}
            className="h-min w-full bg-red flex flex-row items-center justify-start text-white gap-[6px] hover:bg-gradient-to-r hover:from-[#ffffff20] hover:before:h-full hover:before:w-[4px] hover:before:bg-white hover:before:rounded-l-lg hover:before:absolute relative"
          >
            <MyIcon
              src={item.icon}
              alt={item.name}
              height={24}
              width={24}
              className="pl-[4px]"
            />
            <p className="text-[14px] font-medium">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="pl-[30px] py-[30px] flex items-center justify-start flex-col gap-2">
        <div className="h-min w-full bg-red flex flex-row items-center justify-start text-white gap-[6px] hover:bg-gradient-to-r hover:from-[#ffffff20] hover:before:h-full hover:before:w-[4px] hover:before:bg-white hover:before:rounded-l-lg hover:before:absolute relative">
          <MyIcon
            src="/svg/logout.svg"
            alt="logout"
            height={24}
            width={24}
            className="pl-[4px]"
          />
          <p className="text-[14px] font-medium">Logout</p>
        </div>
      </div>
    </div>
  );
}
