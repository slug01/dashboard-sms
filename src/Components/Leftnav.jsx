import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { faArrowRight, faHome,faUserGroup,faChalkboardTeacher, faUser, faBook, faList, faEdit, faDotCircle, faGraduationCap, faStar, faCreditCard, faPieChart, faBus, faBookBookmark, faGear } from '@fortawesome/free-solid-svg-icons'


  

function Leftnav() {
    
    function refreshPage(){
      window.location.reload(false);
    }
    const [open, setOpen] = useState(false)
    
  return (
      <div className={`bg-[#E8E8E8] pb-2   w-[20%] ${!open ? "w-[20%]": "w-[6%]" }`}>
       <div className='w-full h-8 items-center justify-end flex '>
        
        <FontAwesomeIcon icon={faArrowRight} className={` ${!open && "rotate-180"} text-blue-900 h-5 w-5 text-bold border-2 rounded-full border-blue-900  float-right mr-2 hover:bg-[#D1D1D1]`} src={faArrowRight} alt="arrow" onClick={()=>setOpen(!open)}></FontAwesomeIcon>
        </div>
        <div className={` flex space-x-5 items-center space-y-1 hover:bg-[#D1D1D1] cursor-pointer` }>
        <FontAwesomeIcon icon={faHome} className={`h-5 ml-5 w-5 ${!open ? 'space-y-0' : 'space-y-2 w-5 h-5 '}`}></FontAwesomeIcon>
        <p className={`${!open ? "visible": "hidden"} ` } onClick={refreshPage}>Home</p>
        </div>
        <div className={`flex space-x-5 items-center hover:bg-[#D1D1D1] cursor-pointer space-y-1`}>
        <FontAwesomeIcon icon={faUserGroup} className={`h-5 ml-5 w-5 space-y-1${!open ? 'space-y-0' : 'space-y-2 pt-2'}`}></FontAwesomeIcon>
        <p className={`${!open ? "visible": "hidden"}`}>Students</p>
        </div>
        <div className={`flex space-x-5 items-center hover:bg-[#D1D1D1] space-y-1 cursor-pointer`}>
        <FontAwesomeIcon icon={faChalkboardTeacher} className={`h-5 ml-5 w-5 space-y-1${!open ? 'space-y-0' : 'space-y-2 pt-2'}`}></FontAwesomeIcon>
        <p className={`${!open ? "visible": "hidden"}`}>Teachers</p>
        </div>
        <div className={`flex space-x-5 items-center cursor-pointer hover:bg-[#D1D1D1] space-y-1 $`}>
        <FontAwesomeIcon icon={faUser} className={`h-5 ml-5 w-5 space-y-1${!open ? 'space-y-0' : 'space-y-2 pt-2'}`}></FontAwesomeIcon>
        <p className={`${!open ? "visible": "hidden"}`}>Parents</p>
        </div>
        <div className={`flex space-x-5 items-center cursor-pointer hover:bg-[#D1D1D1] space-y-1`}>
        <FontAwesomeIcon icon={faBook} className={`h-5 ml-5 w-5 space-y-1${!open ? 'space-y-0' : 'space-y-2 pt-2'}`}></FontAwesomeIcon>
        <p className={`${!open ? "visible": "hidden"}`}>Subjects</p>
        </div>
        <div className='flex space-x-5 items-center hover:bg-[#D1D1D1] space-y-1 cursor-pointer'>
        <FontAwesomeIcon icon={faList} className={`h-5 ml-5 w-5 space-y-1${!open ? 'space-y-0' : 'space-y-2 pt-2'}`}></FontAwesomeIcon>
        <p className={`${!open ? "visible": "hidden"}`}>Sections</p>
        </div>
        <div className='flex space-x-5 items-center hover:bg-[#D1D1D1] cursor-pointer'>
        <FontAwesomeIcon icon={faEdit} className={`h-5 w-5 ml-5 space-y-1${!open ? 'space-y-0' : 'space-y-2 pt-3'}`}/>
        <p className={`${!open ? "visible": "hidden"}`}>Aattandance</p>
        </div>
         <div className='flex space-x-5 items-center space-y-1 hover:bg-[#D1D1D1] cursor-pointer'>
        <FontAwesomeIcon icon={faDotCircle} className={`ml-5 h-5 w-5 space-y-1${!open ? 'space-y-0' : 'space-y-2 pt-2'}`}/>
        <p className={`${!open ? "visible": "hidden"}`}>Class</p>
        </div>
       <div className='flex space-x-5 items-center space-y-1 hover:bg-[#D1D1D1] cursor-pointer'>
        <FontAwesomeIcon icon={faGraduationCap} className={`ml-5 h-5 w-5 space-y-1${!open ? 'space-y-0' : 'space-y-2 pt-2'}`}/>
        <p className={`${!open ? "visible": "hidden"}`}>Exams</p>
        </div>
        <div className='flex space-x-5 items-center space-y-1 hover:bg-[#D1D1D1] cursor-pointer'>
        <FontAwesomeIcon icon={faStar}className={`ml-5 h-5 w-5 space-y-1${!open ? 'space-y-0' : 'space-y-2 pt-2'}`}/>
        <p className={`${!open ? "visible": "hidden"}`}>Manage Marks</p>
        </div>
        <div className='flex space-x-5 items-center space-y-1 hover:bg-[#D1D1D1] cursor-pointer'>
        <FontAwesomeIcon icon={faCreditCard} className={`ml-5 h-5 w-5 space-y-1${!open ? 'space-y-0' : 'space-y-2 pt-2'}`}/>
        <p className={`${!open ? "visible": "hidden"}`}>Payment</p>
        </div>
        <div className='flex space-x-5 items-center space-y-1 hover:bg-[#D1D1D1] cursor-pointer'>
        <FontAwesomeIcon icon={faPieChart} className={`ml-5 h-5 w-5 space-y-1${!open ? 'space-y-0' : 'space-y-2 pt-2'}`}/>
        <p className={`${!open ? "visible": "hidden"}`}>Accounting</p>
        </div>
        <div className='flex space-x-5 items-center space-y-1 hover:bg-[#D1D1D1] cursor-pointer'>
        <FontAwesomeIcon icon={faBus} className={`ml-5 h-5 w-5 space-y-1${!open ? 'space-y-0' : 'space-y-2 pt-2'}`}/>
        <p className={`${!open ? "visible": "hidden"}`}>Transportation</p>
        </div>
        <div className='flex space-x-5 items-center space-y-1 hover:bg-[#D1D1D1] cursor-pointer'>
        <FontAwesomeIcon icon={faBookBookmark} className={`ml-5 h-5 w-5 space-y-1${!open ? 'space-y-0' : 'space-y-2 pt-2'}`}/>
        <p className={`${!open ? "visible": "hidden"}`}>Library</p>
        </div>
        <div className='flex space-x-5 items-center space-y-1 hover:bg-[#D1D1D1] cursor-pointer'>
        <FontAwesomeIcon icon={faGear} className={`ml-5 h-5 w-5 space-y-1${!open ? 'space-y-0' : ' pt-2'}`}/>
        <p className={`${!open ? "visible": "hidden"}`}>Configuration</p>
        </div>
      </div>
    
  )
}

export default Leftnav
