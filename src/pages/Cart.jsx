import React from 'react'
import {HiShoppingCart} from 'react-icons/hi'
import { useNavigate, useParams, useLocation} from 'react-router-dom'

const Cart = () => {
    const navigate = useNavigate()
    const param = useParams()

    const location = useLocation()

    const objSend = location.state

    console.log('amount zzz', objSend)

  return (
    <div className='main'>
        
        {/* Khối div hiển thị amount lấy từ component home  */}

     <div
       aria-label="noti"
       className="relative flex items-center justify-center w-12 h-12 bg-white rounded-full shadow mb-4"
     >
       <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs text-white bg-orange-500 rounded-full">
         {objSend.amount}
       </span>
       <svg
         xmlns="http://www.w3.org/2000/svg"
         className="w-6 h-6 text-slate-600"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
       >
         <path
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth={2}
           d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
         />
       </svg>
     </div>

        <div aria-label="card-horizontal" className="flex items-center gap-x-5">
          <div className="flex-shrink-0 w-[300px] h-[300px] rounded-lg">
            <img
              src="https://bit.ly/3zzCTUT"
              alt=""
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="flex flex-col flex-1 gap-y-1">
            <h3 className="text-base font-bold text-black">{objSend.name}</h3>
            <span className="text-sm text-black">{objSend.song}</span>
          </div>
        </div>
    </div>
  )
}

export default Cart