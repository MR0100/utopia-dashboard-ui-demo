import MyIcon from "@/components/my_icon";
import Image from "next/image";
import DashboardLeftSection from "./components/dashboard_left_section/dashboard_left_section";
import DashboardRightSection from "./components/dashboard_right_section/dashboard_right_section";

export default function Dashboard() {
  return (
    <div className="px-[30px] pt-[30px] flex flex-row w-full h-full">
      <DashboardLeftSection />
      <DashboardRightSection />
    </div>
  );
}
