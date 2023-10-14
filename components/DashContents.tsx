import React from 'react'
import Carousel from './CoursesCourasel'
import ba from "../public/profile/vlcsnap-2022-06-29-14h22m30s920.png";
import bb from "../public/profile/vlcsnap-2022-06-29-14h23m45s921.png";
import bc from "../public/profile/vlcsnap-2022-06-29-14h24m31s848.png"
import DashMetricsStudents from './DashMetricsStudents';
import { FaBinoculars, FaHome, FaSearch } from 'react-icons/fa';
import FindCourse from './FindCourse';
import HeaderDash from './HeaderDash';


function DashContents() {
  const items = [
    {
      "id":1,
      "courseName":"Sub-poena drafting ",
      "courseInstructor":"John Lenon",
      "coverImage":ba
  },{
      "id":2,
      "courseName":"Litigation drafting ",
      "courseInstructor":"Grace Lenon",
      "coverImage":bb
  },{
      "id":3,
      "courseName":"Ui Design drafting ",
      "courseInstructor":"Thomas Mithamo",
      "coverImage":bc
  },{
      "id":4,
      "courseName":"Mental Health ",
      "courseInstructor":"Grace williams",
      "coverImage":ba
  },{
      "id":5,
      "courseName":"Mistrial ",
      "courseInstructor":"Miss Kim",
      "coverImage":bb
  },{
    "id":6,
    "courseName":"Sub-poena drafting ",
    "courseInstructor":"John Lenon",
    "coverImage":ba
},{
    "id":7,
    "courseName":"Litigation drafting ",
    "courseInstructor":"Grace Lenon",
    "coverImage":bb
},{
    "id":8,
    "courseName":"Ui Design drafting ",
    "courseInstructor":"Thomas Mithamo",
    "coverImage":bc
},{
    "id":9,
    "courseName":"Mental Health ",
    "courseInstructor":"Grace williams",
    "coverImage":ba
},{
    "id":10,
    "courseName":"Mistrial ",
    "courseInstructor":"Miss Kim",
    "coverImage":bb
},  {
    "id":11,
    "courseName":"Sub-poena drafting ",
    "courseInstructor":"John Lenon",
    "coverImage":ba
},{
    "id":12,
    "courseName":"Litigation drafting ",
    "courseInstructor":"Grace Lenon",
    "coverImage":bb
},{
    "id":13,
    "courseName":"Ui Design drafting ",
    "courseInstructor":"Thomas Mithamo",
    "coverImage":bc
},{
    "id":14,
    "courseName":"Mental Health ",
    "courseInstructor":"Grace williams",
    "coverImage":ba
},{
    "id":15,
    "courseName":"Mistrial ",
    "courseInstructor":"Miss Kim",
    "coverImage":bb
},{
  "id":16,
  "courseName":"Sub-poena drafting ",
  "courseInstructor":"John Lenon",
  "coverImage":ba
},{
  "id":17,
  "courseName":"Litigation drafting ",
  "courseInstructor":"Grace Lenon",
  "coverImage":bb
},{
  "id":18,
  "courseName":"Ui Design drafting ",
  "courseInstructor":"Thomas Mithamo",
  "coverImage":bc
},{
  "id":19,
  "courseName":"Mental Health ",
  "courseInstructor":"Grace williams",
  "coverImage":ba
},{
  "id":20,
  "courseName":"Mistrial ",
  "courseInstructor":"Miss Kim",
  "coverImage":bb
}, {
    "id":21,
    "courseName":"Sub-poena drafting ",
    "courseInstructor":"John Lenon",
    "coverImage":ba
},{
    "id":22,
    "courseName":"Litigation drafting ",
    "courseInstructor":"Grace Lenon",
    "coverImage":bb
},{
    "id":23,
    "courseName":"Ui Design drafting ",
    "courseInstructor":"Thomas Mithamo",
    "coverImage":bc
},{
    "id":24,
    "courseName":"Mental Health ",
    "courseInstructor":"Grace williams",
    "coverImage":ba
},{
    "id":25,
    "courseName":"Mistrial ",
    "courseInstructor":"Miss Kim",
    "coverImage":bb
},{
  "id":26,
  "courseName":"Sub-poena drafting ",
  "courseInstructor":"John Lenon",
  "coverImage":ba
},{
  "id":27,
  "courseName":"Litigation drafting ",
  "courseInstructor":"Grace Lenon",
  "coverImage":bb
},{
  "id":28,
  "courseName":"Ui Design drafting ",
  "courseInstructor":"Thomas Mithamo",
  "coverImage":bc
},{
  "id":29,
  "courseName":"Mental Health ",
  "courseInstructor":"Grace williams",
  "coverImage":ba
},{
  "id":30,
  "courseName":"Mistrial ",
  "courseInstructor":"Miss Kim",
  "coverImage":bb
},
  ];
  return (
    <div className='lg:w-4/5 sm:w-full ' >
       <div className='h-[80px]   w-full ' >
       <HeaderDash/>
       
       </div>
        {/*column*/}
        <div className=' mx-auto w-4/5 flex flex-col  mb-5  ' >
            <p className='h-10  text-lg ' style={{
              textAlign:"center"
            }}  >View Your courses</p>
            <Carousel items={items} />
            <DashMetricsStudents/>
        </div>
        <div>

        </div>
    </div>
  )
}

export default DashContents