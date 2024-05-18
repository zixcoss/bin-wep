import React from 'react'
import WifiIcon from './Img/Bin.png'

function Wifi() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <img className="mx-auto mb-4" src={WifiIcon} alt="Wi-Fi Icon" width="72" height="72" />
          <h1 className="text-2xl font-semibold mb-6">Setting WiFi</h1>
          <form className="space-y-4">
            <div>
              <label htmlFor="wifiName" className="sr-only">Wi-Fi Name</label>
              <input type="text" id="wifiName" className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Wi-Fi Name" />
            </div>
            <div>
              <label htmlFor="wifiPassword" className="sr-only">Wi-Fi Password</label>
              <input type="password" id="wifiPassword" className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Wi-Fi Password" />
            </div>
            <button type="submit" className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Connect
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Wifi