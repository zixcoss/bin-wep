import React from 'react'
import Sidebar from './Sidebar'
import batteryfull from './Img/full.png'
import bin from './Img/trash.png'

function Dashboard() {
  return (
    <>
        <div className='flex'>
            <Sidebar/>
            <div className="grid grid-cols-3 grid-rows-3 gap-4 h-screen p-8 w-full">
              {/* กล่องที่ 1 */}
              <div className="col-span-2 row-span-2 bg-green-200 shadow-md rounded-lg border-2 border-green-300 flex flex-col justify-start items-start text-2xl font-bold p-4">
                <h1 className='text-4xl'>แบตเตอรี่</h1>
                <div className='flex flex-col justify-start items-center w-full h-full '>
                  <img src={batteryfull} alt="" className='w-96 '/>
                  <div className='flex w-full justify-around mt-2 '>
                    <div className='flex flex-col items-center'>
                      <span className='text-lg'>แบตเตอรี่</span>
                      <span className='text-5xl'>100%</span>
                    </div>
                    <div className='flex flex-col items-center '>
                      <span className='text-lg'>อัตราการเสื่อสภาพ</span>
                      <span className='text-5xl'>0%</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* กล่องที่ 2 */}
              <div className="col-span-1 row-span-3 bg-blue-300 border-2 border-blue-600 flex flex-col justify-start items-start text-2xl font-bold p-4">
                <h1 className='text-4xl'>ถังขยะ</h1>
                <div className='border-2 border-red-600 flex flex-col justify-styart item-center mt-24'>
                  <img src={bin} alt="" className=''/>
                  <div className='flex flex-col items-center mt-16'>
                      <span className='text-lg'>แบตเตอรี่</span>
                      <span className='text-5xl'>100%</span>
                    </div>
                </div>
              </div>
              {/* กล่องที่ 3 */}
              <div className="col-span-1 row-span-1 bg-green-300 border-2 border-green-600 flex items-center justify-center text-2xl font-bold">
                กล่องที่ 3
              </div>
              {/* กล่องที่ 4 */}
              <div className="col-span-1 row-span-1 bg-yellow-300 border-2 border-yellow-600 flex items-center justify-center text-2xl font-bold">
                กล่องที่ 4
              </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard
