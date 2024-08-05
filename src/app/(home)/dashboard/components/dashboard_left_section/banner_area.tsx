import MyIcon from "@/components/my_icon";
import Image from "next/image";
export default function BannerArea() {
  return (
    <div className="bg-[#F4F6F7] w-full h-auto p-[24px] flex flex-row rounded-md mb-[48px]">
      <div className="w-full flex flex-col gap-[24px]">
        <p className="text-[24px] font-semibold">
          Get Involved – Join a Club Today!
        </p>
        <p className="text-[16px] font-normal text-[#495D72]  pr-[48px]">
          Explore your interests and meet like-minded students by joining one of
          our many clubs. Whether you&apos;re into sports, arts, or academics,
          there&apos;s a club for you. Find your community!
        </p>
        <div className="bg-[#0C1E33] px-[16px] py-[12px] w-fit flex flex-row gap-2 justify-center items-center rounded-md">
          <p className="text-[16px] font-medium text-white pl-[12px]">
            Learn More
          </p>
          <MyIcon src="/svg/arrow-right.svg" alt="Arrow" />
        </div>
      </div>
      <Image
        src="/png/Isolation_Mode.png"
        alt="Dashboard"
        width={251}
        height={196}
      />
    </div>
  );
}
