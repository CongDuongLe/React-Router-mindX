import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [amount, setAmount] = useState(4);


  const objSend = {
    amount: amount,
    name : 'Mu thua MC, lew lew con gà',
    song : 'Chưa hết hiệp 1 đã thua 4 quả'
  }


  const navigation = useNavigate();
  const goToCard = (amount) => {
    // Link to component Cart.jsx
    navigation("/cart", {
      amount: amount,
    });
  };

  // chuyển hướng navigation với params đi cùng
  // cú pháp : navigation('/namePath', {
  //  keyParams : Value
  // })

  return (
    <div className="main">
      <Link to="/cart" state={objSend}>
        <button
          //onClick={goToCard}
          className="inline-flex items-center gap-2 justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </span>
          <span>Go to Cart</span>
        </button>
      </Link>
    </div>
  );
};

export default Home;

// khai báo nhanh 1 component : rafce => enter
