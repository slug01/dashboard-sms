import React from 'react';
import Home from './images/home.png';
import setting from './images/setting.png'

function Header() {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div>
    <div className='bg-blue-900 h-16 w-full items-center flex '>
        <img className="h-8 w-8 mx-5 cursor-pointer" src={Home} alt="Home" onClick={refreshPage}/>
        <h1 className='text-2xl font-serif font-bold text-white cursor-pointer ' onClick={refreshPage}>School Management System</h1>
    </div>
    <div className='h-16 w-full items-center border-b-slate-400 border-2'>
        <button className='flex border-2 border-black p-1 text-base font-serif font-medium  rounded-md float-right mt-3 mr-3'><img src={setting} alt="setting" className='mx-1'/><h1>Options</h1></button>
    </div>
    </div>
  )
}

export default Header
