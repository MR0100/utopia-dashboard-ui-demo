import BannerArea from "./banner_area";
import EnrolledCoursesArea from "./enrolled_courses_area";
import ExamBoardArea from "./exam_board_area";

export default function DashboardLeftSection() {
  return (
    <div className=" flex-auto h-full overflow-auto pr-[24px]">
      <div className="flex flex-row justify-between items-end mb-[30px]">
        <p className="text-[24px] font-normal">👋 Welcome, Merna!</p>
        <p className="text-[10px] font-normal">12 Jan 2023, Friday</p>
      </div>
      <BannerArea />
      <EnrolledCoursesArea />
      <ExamBoardArea />
    </div>
  );
}
