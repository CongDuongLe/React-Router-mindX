import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { IoBatteryHalfOutline } from "react-icons/io5";
const LearnUseIcon = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen bg-pink-200'>
        <div>
            <AiFillGithub
            className='text-[#293462] text-[50px]'
            />
        </div>
        <div>
            <IoBatteryHalfOutline className='text-[#293462] text-[50px]' />
        </div>

    </div>
  )
}

export default LearnUseIcon



// icon : sẽ được convert sang text  và sử dụng như text
// icon sẽ có thuộc tính của text , style : text