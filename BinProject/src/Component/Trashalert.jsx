// TrashAlert.js
import React from 'react';

function TrashAlert({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-red-500 text-white p-4 rounded shadow-lg">
        <h2 className="text-lg font-bold">ขยะเต็ม!</h2>
        <p>โปรดจัดการขยะโดยเร็วที่สุดd</p>
        <button onClick={onClose} className="mt-2 bg-white text-red-500 px-4 py-2 rounded">
          ปิด
        </button>
      </div>
    </div>
  );
}

export default TrashAlert;
