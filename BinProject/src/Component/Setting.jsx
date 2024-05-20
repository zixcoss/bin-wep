import React, { useState } from 'react';
import Sidebar from './Sidebar'
function Setting() {
    const [name, setName] = useState(''); // สถานะสำหรับเก็บชื่อ
    const [rangeValue, setRangeValue] = useState(50); // สถานะสำหรับเก็บค่า range เริ่มต้นที่ 50
  
    const handleNameChange = (e) => {
      setName(e.target.value); // อัปเดตชื่อเมื่อมีการเปลี่ยนแปลงใน input
    };
  
    const handleRangeChange = (e) => {
      setRangeValue(e.target.value); // อัปเดตค่า range เมื่อมีการเปลี่ยนแปลง
    };
    return (
    <>
      <div className='flex'>
        <Sidebar />
        <div className='p-4 w-full border-2 border-red-600 '>
          <div className=''>
            <div className='bg-white p-4 rounded shadow-md border-2 border-green-600 '>
              <label className='block text-sm font-medium text-gray-700'>
              Name
              </label>
              <input 
                type='text' 
                value={name} 
                onChange={handleNameChange} 
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500'
              />
              <p className='mt-2 text-lg font-semibold'>{name}</p>
            </div>
            <div className='bg-white p-4 rounded shadow-md mt-4 border-2 border-blue-600 '>
              <label className='block text-sm font-medium text-gray-700'>
                Select Value
              </label>
              <input 
                type='range' 
                min='1' 
                max='100' 
                value={rangeValue} 
                onChange={handleRangeChange} 
                className='mt-1 w-full'
              />
              <p className='mt-2 text-lg font-semibold'>Value: {rangeValue}</p>
          </div>
        </div>
      </div>
    </div>
    </>
    )
}

export default Setting