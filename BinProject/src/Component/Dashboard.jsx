import React from 'react'
import Sidebar from './Sidebar'
import batteryfull from './Img/full-battery.png'

function Dashboard() {
  return (
    <>
        <div className='flex'>
            <Sidebar/>
            <div className="grid grid-cols-3 grid-rows-3 gap-4 h-screen p-8 w-full">
              {/* กล่องที่ 1 */}
              <div className="col-span-2 row-span-2 bg-red-300 border-2 border-red-600 flex flex-col justify-start items-start text-2xl font-bold p-4">
                <h1>แบตเตอรี่</h1>
                <div className='flex justify-center items-center w-full h-full border-2 border-green-600'>
                  <img src={batteryfull} alt=""/>
                </div>
              </div>
              {/* กล่องที่ 2 */}
              <div className="col-span-1 row-span-3 bg-blue-300 border-2 border-blue-600 flex justify-start items-start text-2xl font-bold p-4">
              <h1>ถังขยะ</h1>
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
