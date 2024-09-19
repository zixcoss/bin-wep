import React from 'react';
import Sidebar from './Sidebar';
import batteryfull from './Img/full.png';
import bin from './Img/trash.png';
import Navbar from './Navbar';
import Grapt from './Grapt';

function Dashboardtest() {
  return (
    <div className="relative flex flex-col lg:flex-row h-screen">
      <div className='fixed hidden lg:block lg:w-1/5 h-screen top-0 left-0 z-50'>
        <Sidebar />
      </div>

      <div className='flex flex-col flex-grow w-full lg:ml-72'>
        <div className='top-0 w-full block lg:hidden'>
          <Navbar />
        </div>

        <div className="flex-grow grid grid-cols-3 grid-rows-[auto,auto,auto,1fr] gap-4 p-4 lg:p-8 
                        portrait-mobile:p-4 landscape-mobile:grid-rows-[auto,auto,auto,1fr] landscape-mobile:h-screen landscape-mobile:p-4 
                        portrait-desktop:grid-rows-[auto,auto,auto,1fr] portrait-desktop:grid-cols-3">

          {/* กล่องที่ 1 */}
          <div className="col-span-3 row-span-1 bg-green-200 shadow-md rounded-lg border-2 border-green-300 flex flex-col justify-start items-start font-bold p-4 md:col-span-2 row-span-2 
                          landscape-mobile:row-span-3 portrait-desktop:col-span-3 portrait-desktop:row-span-1">
            <h1 className='portrait-mobile:text-xl landscape-mobile:text-xl md:text-4xl'>แบตเตอรี่</h1>
            <div className='flex flex-col justify-start items-center w-full h-full'>
              <img src={batteryfull} alt="Battery" className='w-96 landscape-mobile:w-28 portrait-desktop:w-40'/>
              <div className='flex w-full justify-around mt-2 md:w-full portrait-desktop:mt-0'>
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
                          landscape-mobile:row-span-4 portrait-desktop:col-span-3 portrait-desktop:row-span-1">
            <h1 className='portrait-mobile:text-xl md:text-4xl landscape-mobile:text-xl'>ถังขยะ</h1>
            <div className='flex flex-col justify-start items-center w-full h-full'>
              <img src={bin} alt="Bin" className='w-36 mt-4 md:w-96 md:mt-24 landscape-mobile:w-36 landscape-mobile:mt-8 portrait-desktop:w-36 portrait-desktop:mt-2'/>
              <div className='flex flex-col items-center mt-4 md:mt-16 landscape-mobile:mt-8 portrait-desktop:mt-4'>
                <span className='text-sm md:text-lg landscape-mobile:text-sm'>ปริมาณขยะ</span>
                <span className='text-3xl md:text-5xl landscape-mobile:text-3xl portrait-desktop:text-4xl'>100%</span>
              </div>
            </div>
          </div>

          {/* กล่องที่ 3 */}
          <div className="col-span-3 row-span-1 bg-green-300 border-2 border-green-600 flex flex-col justify-start items-start text-2xl font-bold p-4 md:col-span-1 row-span-1 
                          portrait-desktop:col-span-3 portrait-desktop:row-span-1">
            <h1 className='text-2xl md:text-4xl portrait-mobile:text-xl landscape-mobile:text-xl'>สถานะ</h1>
            <div className='flex w-full justify-around'>
              <span className='text-xl text-gray-500 md:text-lg landscape-mobile:text-xl'>เข้าโหมดเรียกหาคน.....</span>
            </div>
          </div>

          {/* กล่องที่ 4 */}
          <div className="col-span-3 row-span-1 bg-yellow-300 border-2 border-yellow-600 flex flex-col justify-start items-start text-2xl font-bold p-4 md:col-span-1 row-span-1 
                          portrait-desktop:col-span-3 portrait-desktop:row-span-1">
            <h1 className='text-2xl md:text-4xl portrait-mobile:text-xl landscape-mobile:text-xl'>WIFI</h1>
            <div className='flex w-full justify-around'>
              <span className='text-xl text-gray-500 md:text-lg landscape-mobile:text-xl'>EXSINNOT</span>
            </div>
          </div>

          {/* กล่องที่ 5 (กราฟ) */}
          <div className="col-span-3 row-span-1 bg-purple-200 border-2 border-purple-600 flex flex-col justify-start items-center p-4 lg:p-8">
            <h1 className='text-2xl md:text-4xl mb-4'>กราฟ</h1>
            <div className='w-full h-full'>
              <Grapt/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboardtest;
