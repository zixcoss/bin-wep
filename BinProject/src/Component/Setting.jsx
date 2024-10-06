import React, { useState } from 'react';
import Sidebar from './Sidebar'
import Navbar from './Navbar';
function Setting() {
    const [name, setName] = useState(''); // สถานะสำหรับเก็บชื่อ
    const [rangeValue, setRangeValue] = useState(30); // สถานะสำหรับเก็บค่า range เริ่มต้นที่ 50
    const [rangeDistanceValue, setRangeDistanceValue] = useState(30); // สถานะสำหรับเก็บค่า range เริ่มต้นที่ 50
  
    const handleNameChange = (e) => {
      setName(e.target.value); // อัปเดตชื่อเมื่อมีการเปลี่ยนแปลงใน input
    };
  
    const handleRangeChange = (e) => {
      setRangeValue(e.target.value); // อัปเดตค่า range เมื่อมีการเปลี่ยนแปลง
    };
    const handleRangeDistanceChange = (e) => {
      setRangeDistanceValue(e.target.value); // อัปเดตค่า range เมื่อมีการเปลี่ยนแปลง
    };
    return (
    <>
      <div className='flex flex-col md:flex-row h-screen'>
        <div className='hidden lg:block'>
          <Sidebar />
        </div>
          <div className='fixed top-0 w-full block lg:hidden'>
            <Navbar />
          </div>
        <div className='bg-gray-300 p-4 w-full h-full flex flex-col justify-center items-center landscape-mobile:mt-52  portrait-mobile:mt-8'>
        
        <h1 className=' font-bold text-6xl text-emerald-800'>Setting</h1>
          <div className='mt-8 portrait-desktop:mt-8 landscape-desktop:mt-8 w-80 h-3/5 p-4 flex flex-col justify-center items-center bg-green-200 border-2 border-green-300 shadow-md rounded-lg md:w-3/5 landscape-mobile:mt-8 landscape-mobile:w-4/5 portrait-mobile:mt-8 h-4/5 h-fit'>
            <div className='w-full bg-white p-4 rounded shadow-md border-2 border-green-600 landscape-mobile:w-4/5 landscape-mobile:h-full '>
              <label className='block text-lg font-medium text-gray-700'>
              คำที่ใช้เรียก
              </label>
              <input 
                type='text' 
                value={name} 
                onChange={handleNameChange} 
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500'
              />
              <p className='mt-2 text-lg font-semibold text-center'>เรียกว่า... {name}</p>
            </div>
            <div className='w-full bg-white p-4 rounded shadow-md mt-4 border-2 border-blue-600 landscape-mobile:w-4/5'>
              <label className='block text-lg font-medium text-gray-700'>
                กลับฐานเมื่อแบตเตอรี่เหลือ
              </label>
              <input 
                type='range' 
                min='1' 
                max='100' 
                value={rangeValue} 
                onChange={handleRangeChange}
                className='mt-1 w-full'
              />
              <p className='mt-2 text-lg font-semibold'>Value: {rangeValue} %</p>
          </div>
          <div className='w-full bg-white p-4 rounded shadow-md mt-4 border-2 border-blue-600 landscape-mobile:w-4/5'>
              <label className='block text-lg font-medium text-gray-700'>
                ให้หุ่นยนต์หยุดเมือเข้าใกล้ cm
              </label>
              <input 
                type='range' 
                min='10' 
                max='30' 
                value={rangeDistanceValue} 
                onChange={handleRangeDistanceChange}
                className='mt-1 w-full'
              />
              <p className='mt-2 text-lg font-semibold'>Value: {rangeDistanceValue} cm</p>
          </div>
        </div>
      </div>
    </div>
    </>
    )
}

export default Setting