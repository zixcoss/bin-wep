import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Grapt = () => {
  // State สำหรับเก็บการเลือกดูกราฟแบบรายวันหรือ 30 วัน
  const [selectedChart, setSelectedChart] = useState('daily'); // 'daily' หรือ 'monthly'

  // ข้อมูลแบตเตอรี่ภายในวันปัจจุบัน (สมมุติว่าเป็นการลดแบตทุกๆ 2 ชั่วโมง)
  const dailyBatteryData = {
    labels: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
    datasets: [
      {
        label: 'Battery Usage Today (%)',
        data: [100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45], // ข้อมูลจำลองของการลดแบตในวันเดียว
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // ข้อมูลแบตเตอรี่รวม 30 วัน
  const monthlyBatteryData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10'],
    datasets: [
      {
        label: 'Battery Usage (%)',
        data: [100, 95, 90, 85, 80, 75, 70, 65, 60, 55], // ข้อมูลจำลองของการลดแบตในช่วง 30 วัน
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // ตัวเลือกการแสดงกราฟ
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: selectedChart === 'daily' ? 'Battery Usage Today' : 'Battery Usage Over 30 Days',
      },
    },
  };

  return (
    <div className="p-4">
      <h1 className='text-2xl font-bold mb-4'>Battery Dashboard</h1>

      {/* ปุ่มสำหรับเลือกดูกราฟ */}
      <div className='mb-4'>
        <button 
          className={`px-4 py-2 mr-2 ${selectedChart === 'daily' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} 
          onClick={() => setSelectedChart('daily')}
        >
          ดูข้อมูลภายในวัน
        </button>
        <button 
          className={`px-4 py-2 ${selectedChart === 'monthly' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} 
          onClick={() => setSelectedChart('monthly')}
        >
          ดูข้อมูลรวม 30 วัน
        </button>
      </div>

      {/* กราฟแสดงข้อมูล */}
      <div className='bg-gray-100 shadow-md rounded-lg p-4'>
        <Line 
          data={selectedChart === 'daily' ? dailyBatteryData : monthlyBatteryData} 
          options={options} 
        />
      </div>
    </div>
  );
};

export default Grapt;
