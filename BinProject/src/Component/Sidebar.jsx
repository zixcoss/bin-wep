import React from 'react'
import Bin from './Img/Bin.png'
import home from './Img/home.png'
import controller from './Img/game-controller.png'
import setting from './Img/settings.png'


function Sidebar() {
  return (
    <>
        {/* กรอบใหญ่สุด */}
        <div className="w-72 h-screen bg-green-200">
            {/* กรอบของโลโก้กับชื่อ */}
            <div className='flex pt-4 shadow-xl rounded-lg'> 
                <div className="ml-2 logo w-24 flex-grow mb-4">
                    <img src={Bin} alt="My Image" />
                </div>
                <div className="flex justify-center items-center text-6xl namelogo w-32 flex-grow">
                    <h2 className='font-bold text-emerald-900'>BIN</h2>
                </div>
            </div> 
            {/* กรอบของพวก sidebar */}
            <div className='mt-2'>
                <p className='text-3xl text-slate-400 mt-4'>menu</p>
                <ul>
                    <li className="flex items-center mt-2 py-4 shadow-md rounded-lg hover:bg-green-500 transition duration-300">
                        <img src={home} alt="Dashboard Icon" className="w-10 h-10 mr-2 ml-2"/>
                        <a href='#' className='text-3xl text-emerald-700 hover:text-white'>Dashboard</a>
                    </li>
                    <li className="flex items-center mt-4 py-4 shadow-md rounded-lg hover:bg-green-500 transition duration-300">
                        <img src={controller} alt="Control Icon" className="w-10 h-10 mr-2 ml-2 " />
                        <a href='#' className='text-3xl text-emerald-700 hover:text-white'>Control</a>
                    </li>
                    <li className="flex items-center mt-4 py-4 shadow-md rounded-lg hover:bg-green-500 transition duration-300">
                        <img src={setting} alt="Setting Icon" className="w-10 h-10 mr-2 ml-2" />
                        <a href='#' className='text-3xl text-emerald-700 hover:text-white'>Setting</a>
                    </li>
                </ul>
            </div>
        </div>
    </>
    
  )
}

export default Sidebar