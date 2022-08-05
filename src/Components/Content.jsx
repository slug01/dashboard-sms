import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  
  faChalkboardTeacher,
  faUserGroup,
  faUser,
  faEdit,
  faDotCircle,
  faGraduationCap,
  faCreditCard,
  faPieChart,
  faStar,
  faBook,
  faList,
  faBus,
  faBookBookmark,
} from "@fortawesome/free-solid-svg-icons";
function Content() {
  return (
    <div className="w-full h-fit">
      <div className="mt-3 flex space-x-2 w-[100%] h-fit">
        <div className="w-[24%] border-[1px] h-32 bg-green-400 text-white">
          <p className="font-bold text-4xl mt-3 ml-2 ">2</p>
          <div className="flex mb-1 relative mt-5 ml-2 h-10 w-full items-center space-x-2">
            <FontAwesomeIcon className="h-7 w-7" icon={faUserGroup} />
            <p className="font-semibold text-base">Total Students</p>
          </div>
        </div>

        <div className="w-[24%] border-[1px] h-32 bg-red-400 text-white">
          <p className="font-bold text-4xl mt-3 ml-2 ">2</p>
          <div className="flex mb-1 relative mt-5 ml-2 h-10 w-full items-center space-x-2">
            <FontAwesomeIcon className="h-7 w-7" icon={faChalkboardTeacher} />
            <p className="font-semibold text-base">Total Teachers</p>
          </div>
        </div>

        <div className="w-[24%] border-[1px] h-32 bg-blue-400 text-white">
          <p className="font-bold text-4xl mt-3 ml-2 ">2</p>
          <div className="flex mb-1 relative mt-5 ml-2 h-10 w-full items-center space-x-2">
            <FontAwesomeIcon className="h-7 w-7" icon={faUser} />
            <p className="font-semibold text-base">Total Parent</p>
          </div>
        </div>

        <div className="w-[24%] border-[1px] h-32 bg-amber-300 text-white">
          <p className="font-bold text-4xl mt-3 ml-2 ">2</p>
          <div className="flex mb-1 relative mt-5 ml-2 h-10 w-full items-center space-x-2">
            <FontAwesomeIcon className="h-7 w-7" icon={faEdit} />
            <p className="font-semibold text-base">Today Present</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-base font-bold">
          School Management System Quick Icons
        </p>
      </div>

      <div className="grid grid-cols-8 text-blue-500 text-center gap-5 w-[96%]">
        <div className="py-8 items-stretch bg-[#E8E8E8] cursor-pointer hover:bg-[#D1D1D1]">
            <FontAwesomeIcon icon={faUserGroup} className="h-8 w-8"/>
            <p>Students</p>
        </div>
        <div className="py-8 items-stretch bg-[#E8E8E8] cursor-pointer hover:bg-[#D1D1D1]">
            <FontAwesomeIcon icon={faChalkboardTeacher} className="h-8 w-8"/>
            <p>Teachers</p>
        </div>
        <div className="py-8 items-stretch bg-[#E8E8E8] cursor-pointer hover:bg-[#D1D1D1]">
            <FontAwesomeIcon icon={faUser} className="h-8 w-8"/>
            <p>Parents</p>
        </div>
        <div className="py-8 items-stretch bg-[#E8E8E8] cursor-pointer hover:bg-[#D1D1D1]">
            <FontAwesomeIcon icon={faBook} className="h-8 w-8"/>
            <p>Subject</p>
        </div>
        <div className="py-8 items-stretch bg-[#E8E8E8] cursor-pointer hover:bg-[#D1D1D1]">
            <FontAwesomeIcon icon={faList} className="h-8 w-8"/>
            <p>Sections</p>
        </div>
        <div className="py-8 items-stretch bg-[#E8E8E8] cursor-pointer hover:bg-[#D1D1D1]">
            <FontAwesomeIcon icon={faUserGroup} className="h-8 w-8"/>
            <p>Students</p>
        </div>
        <div className="py-8 items-stretch bg-[#E8E8E8] cursor-pointer hover:bg-[#D1D1D1]">
            <FontAwesomeIcon icon={faEdit} className="h-8 w-8"/>
            <p>Attandance</p>
        </div>
        <div className="py-8 items-stretch bg-[#E8E8E8] cursor-pointer hover:bg-[#D1D1D1]">
            <FontAwesomeIcon icon={faDotCircle} className="h-8 w-8"/>
            <p>Class</p>
        </div>
        <div className="py-8 items-stretch bg-[#E8E8E8] cursor-pointer hover:bg-[#D1D1D1]">
            <FontAwesomeIcon icon={faGraduationCap} className="h-8 w-8"/>
            <p>Exams</p>
        </div>
        <div className="py-8 items-stretch bg-[#E8E8E8] cursor-pointer hover:bg-[#D1D1D1]">
            <FontAwesomeIcon icon={faStar} className="h-8 w-8"/>
            <p>Marks</p>
        </div>
        <div className="py-8 items-stretch bg-[#E8E8E8] cursor-pointer hover:bg-[#D1D1D1]">
            <FontAwesomeIcon icon={faCreditCard} className="h-8 w-8"/>
            <p>Payment</p>
        </div>
        <div className="py-8 items-stretch bg-[#E8E8E8] cursor-pointer hover:bg-[#D1D1D1]">
            <FontAwesomeIcon icon={faPieChart} className="h-8 w-8"/>
            <p>Accounting</p>
        </div>
        <div className="py-8 items-stretch bg-[#E8E8E8] cursor-pointer hover:bg-[#D1D1D1]">
            <FontAwesomeIcon icon={faBus} className="h-8 w-8"/>
            <p>Transportaion</p>
        </div>
        <div className="py-8 items-stretch bg-[#E8E8E8] cursor-pointer hover:bg-[#D1D1D1]">
            <FontAwesomeIcon icon={faBookBookmark} className="h-8 w-8"/>
            <p>Library</p>
        </div>
        <div className="py-8 items-stretch bg-[#E8E8E8] cursor-pointer hover:bg-[#D1D1D1]">
            <FontAwesomeIcon icon={faUserGroup} className="h-8 w-8"/>
            <p>Students</p>
        </div>
        
      </div>
    </div>
  );
}

export default Content;
