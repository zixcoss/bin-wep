import React from 'react'
import Sidebar from './Sidebar'
function Control() {
  return (
    <>
        <div className='flex'>
            <Sidebar/>
            <div className="flex w-full justify-center items-center bg-gray-200">
              <div className="relative flex items-center justify-center w-64 h-64 bg-white border-4 border-green-600 rounded-full shadow-lg">
                {/* ปุ่มขึ้น */}
                <button className="absolute top-4 w-12 h-12 bg-gray-300 border-2 border-gray-500 rounded-full focus:outline-none hover:bg-gray-400">
                  ▲
                </button>
                {/* ปุ่มลง */}
                <button className="absolute bottom-4 w-12 h-12 bg-gray-300 border-2 border-gray-500 rounded-full focus:outline-none hover:bg-gray-400">
                  ▼
                </button>
                {/* ปุ่มซ้าย */}
                <button className="absolute left-4 w-12 h-12 bg-gray-300 border-2 border-gray-500 rounded-full focus:outline-none hover:bg-gray-400">
                  ◄
                </button>
                {/* ปุ่มขวา */}
                <button className="absolute right-4 w-12 h-12 bg-gray-300 border-2 border-gray-500 rounded-full focus:outline-none hover:bg-gray-400">
                 ►
                </button>
                {/* กล่องครอบจอย */}
                <div className="flex items-center justify-center w-24 h-24 bg-white border-4 border-blue-600 rounded-full">
                  <span className="text-xl font-bold">Joy</span>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Control