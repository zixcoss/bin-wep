import React from 'react'
import Bin from './Img/Bin.png'
import home from './Img/home.png'
import controller from './Img/game-controller.png'
import setting from './Img/settings.png'

function Sidebar() {
  return (
    <>
        <div className="Container border-2 border-rose-600 w-64 h-screen bg-green-200">
            <div className='Container-logo flex pt-4 border-2 border-green-600'>
                <div className="border-2 border-blue-600 logo w-24 flex-grow ">
                    <img src={Bin} alt="My Image" />
                </div>
                <div className="flex justify-center items-center text-6xl text-green-600/100 namelogo border-2 border-blue-600 w-32 flex-grow">
                    <h1 className=''>BIN</h1>
                </div>
            </div> 
            <div className='border-2 border-green-600 mt-6 '>
                <p className='text-3xl text-slate-400 text-center'>menu</p>
                <div className='flex mt-6' >
                    <img src={home} alt="" className='w-16'/>
                    <h2>Dashboard</h2> 
                </div>
                <div className='flex'>
                    <img src={controller} alt="" className='w-16'/>
                    <h2>Controller</h2>
                </div>
                <div className='flex'>
                    <img src={setting} alt="" className='w-16'/>
                    <h2>Setting</h2>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default Sidebar