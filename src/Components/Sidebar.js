import React from 'react'
import logo from "../assets/image 1.png"
import userLogo from "../assets/user.png"

const Sidebar = () => {
  return (
    <div className='w-[18%] flex flex-col  justify-between h-[100vh]  border-r-2 border-[#E4E4E4] '>
      <div>
        <div className='w-[80%] m-auto '>
          <img src={logo} alt='logo' />
        </div>
        <div className='flex flex-col gap-5 mt-5'>
          <p className='p-2 hover:bg-[#4643EE1A] font-semibold text-lg w-[80%] m-auto rounded-md text-[#777676] hover:cursor-pointer hover:text-[#4643EE]'>Overview</p>
          <p className='p-2 hover:bg-[#4643EE1A] font-semibold text-lg w-[80%] m-auto rounded-md text-[#777676] hover:cursor-pointer hover:text-[#4643EE] '>Onboarding</p>
          <p className='p-2 bg-[#4643EE1A] font-semibold text-lg w-[80%] m-auto rounded-md  hover:cursor-pointer text-[#4643EE]'>Monitoring</p>
          <p className='p-2 hover:bg-[#4643EE1A] font-semibold text-lg w-[80%] m-auto rounded-md text-[#777676] hover:cursor-pointer hover:text-[#4643EE]'>Flagging</p>
          <p className='p-2 hover:bg-[#4643EE1A] font-semibold text-lg w-[80%] m-auto rounded-md text-[#777676] hover:cursor-pointer hover:text-[#4643EE]'>Source of Income</p>
          <p className='p-2 hover:bg-[#4643EE1A] font-semibold text-lg w-[80%] m-auto rounded-md text-[#777676] hover:cursor-pointer hover:text-[#4643EE]'>UAR</p>
        </div>
      </div>
      <div>
        <div className='w-[80%] m-auto h-[60px]  mb-5 flex gap-2'>
          <img className='h-[50px]' src={userLogo} alt='user' />
          <div className='font-semibold'>
            <p>Elon Musk</p>
            <p className='text-[#777676]'>elon@twitter.com</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Sidebar;