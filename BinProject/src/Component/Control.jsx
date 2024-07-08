import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

function Control() {
  return (
    <>
      <div className='flex flex-col md:flex-row h-screen'>
        <div className='hidden 2xl:block'>
          <Sidebar /> 
        </div>
          <div className='fixed top-0 block w-full 2xl:hidden'>
            <Navbar />
          </div>
        <div className=" border-2 flex flex-col md:flex-row w-full justify-center items-center h-full p-4 2xl:w-full">
          <div className="relative flex flex-col items-center justify-center w-full h-96 md:h-3/4 bg-green-200 border-4 border-green-600 rounded-full shadow-lg landscape-mobile:w-80 landscape-mobile:h-64 landscape-mobile:flex landscape-mobile:mt-24">
            {/* ปุ่มขึ้น */}
            <button className="absolute top-10 md:top-6 w-20 h-20 md:w-32 md:h-32 lg:w-44 lg:h-44 bg-emerald-900 text-white border-2 border-gray-500 rounded-full focus:outline-none hover:bg-gray-400
                                landscape-mobile:w-20 landscape-mobile:h-20 landscape-mobile:top-4">
              ▲
            </button>
            {/* ปุ่มลง */}
            <button className="absolute bottom-10 md:bottom-6 w-20 h-20 md:w-32 md:h-32 lg:w-44 lg:h-44 bg-emerald-900 text-white border-2 border-gray-500 rounded-full focus:outline-none hover:bg-gray-400
                                landscape-mobile:w-20 landscape-mobile:h-20 landscape-mobile:bottom-4">
              ▼
            </button>
            {/* ปุ่มซ้าย */}
            <button className="absolute left-4 md:left-6 w-20 h-20 md:w-32 md:h-32 lg:w-44 lg:h-44 bg-emerald-900 text-white border-2 border-gray-500 rounded-full focus:outline-none hover:bg-gray-400
                                landscape-mobile:w-20 landscape-mobile:h-20 landscape-mobile:left-4">
              ◄
            </button>
            {/* ปุ่มขวา */}
            <button className="absolute right-4 md:right-6 w-20 h-20 md:w-32 md:h-32 lg:w-44 lg:h-44 bg-emerald-900 text-white border-2 border-gray-500 rounded-full focus:outline-none hover:bg-gray-400
                                landscape-mobile:w-20 landscape-mobile:h-20 landscape-mobile:right-4">
              ►
            </button>
            {/* กล่องครอบจอย */}
            <div className="flex items-center justify-center w-24 h-24 md:w-32 md:h-32 lg:w-32 lg:h-32 bg-white border-4 border-blue-600 rounded-full
                            landscape-mobile:w-10 landscape-mobile:h-10">
              <span className="text-xl font-bold"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Control;
