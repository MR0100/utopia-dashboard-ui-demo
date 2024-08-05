import MyIcon from "@/components/my_icon";

export default function ExamBoardArea() {
  let tableData = [
    {
      examName: "Quiz 1",
      course: "Graphic Fundamentals - ART101",
      date: "10 Jan 2023",
      time: "10:00 AM - 11:00 AM",
      location: "Design Studio A",
      status: "Completed",
    },
    {
      examName: "Quiz 2",
      course: "Graphic Fundamentals - ART101",
      date: "10 Jan 2023",
      time: "11:00 AM - 12:00 PM",
      location: "Design Studio A",
      status: "Completed",
    },
    {
      examName: "Midterm Exam",
      course: "Graphic Fundamentals - ART101",
      date: "12 Jan 2023",
      time: "9:00 AM - 10:30 AM",
      location: "Design Studio A",
      status: "Upcoming",
    },
    {
      examName: "Final Exam",
      course: "Advanced Web Design - ITD201",
      date: "15 Jan 2023",
      time: "1:30 PM - 3:00 PM",
      location: "Computer Lab 3",
      status: "Upcoming",
    },
    {
      examName: "Quiz 1",
      course: "Computer Science - CSC101",
      date: "18 Jan 2023",
      time: "10:00 AM - 11:00 AM",
      location: "Room 101",
      status: "Upcoming",
    },
    {
      examName: "Midterm Exam",
      course: "Computer Science - CSC101",
      date: "22 Jan 2023",
      time: "9:00 AM - 10:30 AM",
      location: "Room 101",
      status: "Upcoming",
    },
    {
      examName: "Final Exam",
      course: "Computer Science - CSC101",
      date: "25 Jan 2023",
      time: "1:30 PM - 3:00 PM",
      location: "Room 101",
      status: "Pending",
    },
  ];
  return (
    <div className="mb-[42px]">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row justify-start items-center">
          <MyIcon src="/svg/note-2-black.svg" alt="Book" />
          <p className="text-[16px] font-medium text-[#0C1E33]">Exam Board</p>
        </div>
        <div className="flex flex-row justify-start items-center">
          <p className="text-[#2F80ED] text-[14px] font-medium">View all</p>
          <MyIcon src="/svg/show-more.svg" alt="Arrow" width={21} height={21} />
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#CED8E5] mt-[16px] mb-[24px]"></div>
      <table className="table-auto w-full">
        <thead className="table-header-group text-[14px] text-[#495D72]">
          <tr>
            {[
              {
                title: "Exam Name",
              },
              {
                title: "Course",
              },
              {
                title: "Date",
              },
              {
                title: "Time",
              },
              {
                title: "Location",
              },
              {
                title: "Status",
              },
            ].map((item, index) => {
              return (
                <th className="px-4 py-2 font-normal " key={index}>
                  <div className="flex flex-row items-center">
                    <p>{item.title}</p>
                    <MyIcon src="/svg/arrow-3.svg" alt="Sort" />
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="text-[14px] text-[#0C1E33] font-normal">
          {tableData.map((item, index) => {
            return (
              <tr
                key={index}
                className={index % 2 == 1 ? "bg-white" : "bg-[#F4F6F7]"}
              >
                <td className="px-4 py-2">{item.examName}</td>
                <td className="px-4 py-2">{item.course}</td>
                <td className="px-4 py-2">{item.date}</td>
                <td className="px-4 py-2">{item.time}</td>
                <td className="px-4 py-2">{item.location}</td>
                <td className={"px-4 py-2 "}>
                  <p
                    className={
                      "font-medium rounded-md px-4 py-1 w-fit " +
                      (item.status == "Completed"
                        ? "bg-green-100 "
                        : item.status == "Upcoming"
                        ? "bg-cyan-100 "
                        : item.status == "Pending"
                        ? "bg-orange-100 "
                        : "bg-transparent ") +
                      (item.status == "Completed"
                        ? "text-green-600 "
                        : item.status == "Upcoming"
                        ? "text-cyan-600 "
                        : item.status == "Pending"
                        ? "text-orange-600 "
                        : "bg-transparent ")
                    }
                  >
                    {item.status}
                  </p>
                </td>
                <td className="px-4 py-2">
                  <MyIcon src="/svg/more.svg" alt="action" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
