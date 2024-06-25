import React from 'react'
import Sidebar from './Sidebar'
import batteryfull from './Img/full.png'
import bin from './Img/trash.png'
import Navbar from './Navbar';

function Dashboard() {
  return (
    <>
      <div className='flex flex-col lg:flex-row h-screen'>
        <div className='hidden lg:block'>
          <Sidebar />
        </div>
          <div className='top-0 w-full block lg:hidden'>
            <Navbar />
          </div>
            <div className="grid grid-cols-3 grid-rows-4 gap-4 h-screen p-4 w-full md:grid-rows-3 md:p-8
                            landscape-mobile:grid-rows-4
                            portrait-desktop:grid-rows-4 portrait-desktop:grid-cos-3">
              {/* กล่องที่ 1 */}
              <div className="col-span-3 row-span-1 bg-green-200 shadow-md rounded-lg border-2 border-green-300 flex flex-col justify-start items-start font-bold p-4 md:col-span-2 row-span-2
                              landscape-mobile:row-span-3
                              portrait-desktop:col-span-3 portrait-desktop:row-span-1">
                <h1 className='text-2xl md:text-4xl landscape-mobile:text-xl' >แบตเตอรี่</h1>
                <div className='flex flex-col justify-start items-center w-full h-full'>
                  <img src={batteryfull} alt="" className='w-36 md:w-96 landscape-mobile:w-28 portrait-desktop:w-40'/>
                  <div className='flex w-full justify-around mt-2 md:w-full justify-around mt-2 portrait-desktop:mt-0'>
                    <div className='flex flex-col items-center mb-8'>
                      <span className='text-sm md:text-lg landscape-mobile:text-sm'>แบตเตอรี่</span>
                      <span className='text-3xl md:text-5xl landscape-mobile:text-3xl portrait-desktop:text-4xl'>100%</span>
                    </div>
                    <div className='flex flex-col items-center '>
                      <span className='text-sm md:text-lg landscape-mobile:text-sm'>อัตราการเสื่อสภาพ</span>
                      <span className='text-3xl md:text-5xl landscape-mobile:text-3xl portrait-desktop:text-4xl'>0%</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* กล่องที่ 2 */}
              <div className="col-span-3 row-span-1 bg-blue-300 border-2 border-blue-600 flex flex-col justify-start items-start text-2xl font-bold p-4 md:col-span-1 row-span-3
                              landscape-mobile:row-span-4
                              portrait-desktop:col-span-3 portrait-desktop:row-span-1">
                <h1 className='text-2xl md:text-4xl landscape-mobile:text-xl'>ถังขยะ</h1>
                <div className='border-2 border-red-600 flex flex-col justify-start items-center w-full h-full'>
                  <img src={bin} alt="" className='w-36 mt-4 md:w-96 md:mt-24 landscape-mobile:w-36 landscape-mobile:mt-8 portrait-desktop:w-36 portrait-desktop:mt-2'/>
                  <div className='flex flex-col items-center mt-4 md:mt-16 landscape-mobile:mt-8 portrait-desktop:mt-4'>
                      <span className='text-sm md:text-lg landscape-mobile:text-sm'>ปริมาณขยะ</span>
                      <span className='text-3xl md:text-5xl landscape-mobile:text-3xl portrait-desktop:text-4xl'>100%</span>
                    </div>
                </div>
              </div>
              {/* กล่องที่ 3 */}
              <div className="col-span-3 row-span-1 bg-green-300 border-2 border-green-600 flex flex-col justify-start items-start text-2xl font-bold p-4 md:col-span-1 row-span-1
                              portrait-desktop:col-span-3 portrait-desktop:row-span-1">
                <h1 className='text-2xl md:text-4xl landscape-mobile:text-xl'>สถานะ</h1>
              </div>
              {/* กล่องที่ 4 */}
              <div className="col-span-3 row-span-1 bg-yellow-300 border-2 border-yellow-600 flex flex-col justify-start items-start text-2xl font-bold p-4 md:col-span-1 row-span-1
                              portrait-desktop:col-span-3 portrait-desktop:row-span-1">
                <h1 className='text-2xl md:text-4xl landscape-mobile:text-xl'>WIFI</h1>
              </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard
