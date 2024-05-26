import React from 'react'
import Sidebar from './Sidebar'


function Dashboard() {
  return (
    <>
        <div className='flex'>
            <Sidebar/>
            <h1>Dashboard</h1>
            <div className="flex w-full justify-center items-center bg-gray-200 h-screen ">
            <div className="relative flex items-center justify-center w-3/4 h-3/4 bg-green-200 border-4 border-green-600 rounded-full shadow-lg">
              {/* ปุ่มขึ้น */}
              <button className="absolute top-6 w-44 h-44 bg-emerald-900 text-white border-2 border-gray-500 rounded-full focus:outline-none hover:bg-gray-400">
                ▲
              </button>
              {/* ปุ่มลง */}
              <button className="absolute bottom-6 w-44 h-44 bg-emerald-900 text-white border-2 border-gray-500 rounded-full focus:outline-none hover:bg-gray-400">
                ▼
              </button>
              {/* ปุ่มซ้าย */}
              <button className="absolute left-6 w-44 h-44 bg-emerald-900 text-white border-2 border-gray-500 rounded-full focus:outline-none hover:bg-gray-400">
                ◄
              </button>
              {/* ปุ่มขวา */}
              <button className="absolute right-6 w-44 h-44 bg-emerald-900 text-white border-2 border-gray-500 rounded-full focus:outline-none hover:bg-gray-400">
                ►
              </button>
              {/* กล่องครอบจอย */}
              <div className="flex items-center justify-center w-32 h-32 bg-white border-4 border-blue-600 rounded-full">
                <span className="text-2xl font-bold">Joy</span>
              </div>
            </div>
      </div>
            
        </div>
    </>
    
  )
}

export default Dashboard