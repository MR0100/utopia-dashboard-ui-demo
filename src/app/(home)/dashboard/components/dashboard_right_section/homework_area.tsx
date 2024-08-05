import MyIcon from "@/components/my_icon";

export default function HomeworkArea() {
  let data = [
    {
      title: "Graphic Fundamentals",
      assignment: "Design Project 1",
      dueDate: "10 Feb 2024",
      status: "Not Submitted",
      progress: "before:w-[80%] after:left-[80%]",
    },
    {
      title: "Advanced Web Design",
      assignment: "Responsive Web Development Project",
      dueDate: "15 Feb 2024",
      status: "Completed",
      progress: "before:hidden after:hidden rounded-b-md border-b-[2px]",
    },
    {
      title: "User Experience Research",
      assignment: "Usability Testing Report",
      dueDate: "20 Feb 2024",
      status: "In Progress",
      progress: "before:w-[20%] after:left-[20%]",
    },
    {
      title: "Digital Photography",
      assignment: "Photojournalism Project",
      dueDate: "25 Feb 2024",
      status: "Not Started",
      progress: "before:hidden after:hidden rounded-b-md border-b-[2px]",
    },
    {
      title: "3D Animation",
      assignment: "Character Animation Project",
      dueDate: "28 Feb 2024",
      status: "Not Submitted",
      progress: "before:w-[90%] after:left-[90%]",
    },
  ];
  return (
    <div className="mb-[42px]">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row justify-start items-center">
          <MyIcon src="/svg/clipboard-text-black.svg" alt="Book" />
          <p className="text-[16px] font-medium text-[#0C1E33]">Homeworks</p>
        </div>
        <div className="flex flex-row justify-start items-center">
          <p className="text-[#2F80ED] text-[14px] font-medium">View all</p>
          <MyIcon src="/svg/show-more.svg" alt="Arrow" width={21} height={21} />
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#CED8E5] mt-[16px] mb-[24px]"></div>
      <div className="flex flex-col gap-[30px]">
        {data.map((item, index) => {
          // after:bg-red-400  border-red-400  before:bg-red-400
          let color =
            item.status == "Completed"
              ? " after:bg-[#61A249]  border-[#61A249]  before:bg-[#61A249] "
              : item.status == "In Progress"
              ? " after:bg-[#BB6BD9]  border-[#BB6BD9]  before:bg-[#BB6BD9] "
              : item.status == "Not Submitted"
              ? " after:bg-[#F2994A]  border-[#F2994A]  before:bg-[#F2994A] "
              : item.status == "Not Started"
              ? " after:bg-[#CDD8E5]  border-[#CDD8E5]  before:bg-[#CDD8E5] "
              : " after:bg-[#CDD8E5]  border-[#CDD8E5]  before:bg-[#CDD8E5] ";
          return (
            <div
              key={index}
              className={
                item.progress +
                color +
                " rounded-t-md rounded-es-md border-x-[2px] border-t-[2px] before:rounded-full relative  before:h-[2px]  before:absolute before:bottom-0 after:w-[6px] after:h-[6px]  after:absolute after:bottom-0 after:transform after:-translate-x-[50%] after:translate-y-[40%] after:rounded-full"
              }
            >
              <div className="p-[12px]">
                <div className=" flex flex-row justify-between">
                  <p className="text-[14px] font-medium text-[#0C1E33]">
                    {item.title}
                  </p>
                  <div
                    className={
                      "text-[10px] font-semibold rounded-sm px-[6px] py-[2px] w-fit " +
                      (item.status == "Completed"
                        ? "bg-[#D9EED1] "
                        : item.status == "In Progress"
                        ? "bg-[#F4E7F9] "
                        : item.status == "Not Submitted"
                        ? "bg-[#FFEBDB] "
                        : item.status == "Not Started"
                        ? "bg-[#FBDDDD] "
                        : "bg-transparent ") +
                      (item.status == "Completed"
                        ? "text-[#61A249] "
                        : item.status == "In Progress"
                        ? "text-[#BB6BD9] "
                        : item.status == "Not Submitted"
                        ? "text-[#F2994A] "
                        : item.status == "Not Started"
                        ? "text-[#EB5757] "
                        : "text-black ")
                    }
                  >
                    {item.status}
                  </div>
                </div>
                <div className="h-[1px] w-full bg-[#DFE7EE] my-[12px]"></div>
                <div className="flex flex-col items-start gap-[12px]">
                  <p className="text-[12px] font-normal text-[#0C1E33]">
                    Assignment: {item.assignment}
                  </p>
                  <p className="text-[12px] font-normal text-[#0C1E33]">
                    Due: {item.dueDate}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
