import MyIcon from "@/components/my_icon";

export default function EnrolledCoursesArea() {
  return (
    <div className="mb-[48px]">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row justify-start items-center">
          <MyIcon src="/svg/book-black.svg" alt="Book" />
          <p className="text-[16px] font-medium text-[#0C1E33]">
            Enrolled Courses
          </p>
        </div>
        <div className="flex flex-row justify-start items-center">
          <p className="text-[#2F80ED] text-[14px] font-medium">View all</p>
          <MyIcon src="/svg/show-more.svg" alt="Arrow" width={21} height={21} />
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#CED8E5] mt-[16px] mb-[24px]"></div>
      <div className="w-full h-fit flex flex-row justify-between gap-[24px]">
        {[
          {
            title: "Graphic Fundamentals - ART101",
            bg: "bg-[#E1D2FF]",
            data: [
              {
                name: "Prof. Smith",
                icon: "/svg/profile-black.svg",
              },
              {
                name: "Monday & Wednesday ",
                icon: "/svg/calendar-2-black.svg",
              },
              {
                name: "9:00 AM - 10:30 AM",
                icon: "/svg/clock-black.svg",
              },
              {
                name: "Design Studio A",
                icon: "/svg/location-black.svg",
              },
            ],
          },
          {
            title: "Advanced Web Design - ITD201",
            bg: "bg-[#FDE1AC]",
            data: [
              {
                name: "Dr. Johnson",
                icon: "/svg/profile-black.svg",
              },
              {
                name: "Tuesday & Thursday",
                icon: "/svg/calendar-2-black.svg",
              },
              {
                name: "1:30 PM - 3:00 PM",
                icon: "/svg/clock-black.svg",
              },
              {
                name: "Computer Lab 3",
                icon: "/svg/location-black.svg",
              },
            ],
          },
          {
            title: "User Experience Research - UXD301",
            bg: "bg-[#BAE5F5]",
            data: [
              {
                name: "Prof. Davis",
                icon: "/svg/profile-black.svg",
              },
              {
                name: "Monday & Saturday ",
                icon: "/svg/calendar-2-black.svg",
              },
              {
                name: "11:00 AM - 12:30 AM",
                icon: "/svg/clock-black.svg",
              },
              {
                name: "Design Lab 2",
                icon: "/svg/location-black.svg",
              },
            ],
          },
          {
            title: "3D Animation Techniques - ANI301",
            bg: "bg-[#CCEFBF]",
            data: [
              {
                name: "Dr. Martinez",
                icon: "/svg/profile-black.svg",
              },
              {
                name: "Wednesday ",
                icon: "/svg/calendar-2-black.svg",
              },
              {
                name: "2:00 PM - 5:00 PM",
                icon: "/svg/clock-black.svg",
              },
              {
                name: "Animation Studio",
                icon: "/svg/location-black.svg",
              },
            ],
          },
        ].map((course, index) => {
          return (
            <div
              key={index}
              className={
                course.bg +
                " w-full p-[24px] text-[#0C1E33] rounded-md relative after:absolute after:border-b-[1px] after:border-r-[1px] after:border-[#CED8E5] after:w-full after:h-full after:top-[4px] after:left-[4px] after:rounded-md"
              }
            >
              <p className="text-[16px] font-semibold">{course.title}</p>
              <div className="w-full h-[1px] bg-white bg-opacity-60 my-2"></div>
              <div>
                {course.data.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-row gap-2 justify-start items-center"
                    >
                      <MyIcon
                        src={data.icon}
                        alt={data.name}
                        width={21}
                        height={21}
                      />
                      <p className="text-[14px] font-light">{data.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
