import React from "react";
import { Link } from "react-router-dom";
import {HiShoppingCart} from 'react-icons/hi'
import { BsFillMoonStarsFill } from "react-icons/bs";

const TopTab = () => {
  return (
    <div className="w-full h-[60px] flex flex-row bg-[#FFF5E1] fixed px-4 justify-between items-center">
      {/* Khoi div chua logo */}
      <div>
        <Link
          to="/"
          className="w-1/3 h-full flex justify-center items-center text-lg"
        >
          {/* <svg
            width="308"
            height="142"
            viewBox="0 0 668 142"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2023_9983)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M211 142C250.212 142 282 110.212 282 71C282 31.7878 250.212 0 211 0C171.788 0 140 31.7878 140 71C140 110.212 171.788 142 211 142ZM211 109.156C232.073 109.156 249.156 92.0732 249.156 71C249.156 49.9268 232.073 32.8435 211 32.8435C189.927 32.8435 172.844 49.9268 172.844 71C172.844 92.0732 189.927 109.156 211 109.156Z"
                fill="#0043E9"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M456 142C495.212 142 527 110.212 527 71C527 31.7878 495.212 0 456 0C416.788 0 385 31.7878 385 71C385 110.212 416.788 142 456 142ZM456.156 109.313C477.23 109.313 494.313 92.2297 494.313 71.1565C494.313 50.0833 477.23 33 456.156 33C435.083 33 418 50.0833 418 71.1565C418 92.2297 435.083 109.313 456.156 109.313Z"
                fill="#0043E9"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M59 0C26.4152 0 0 26.4152 0 59V142H36V60.5C36 45.8645 47.8645 34 62.5 34C77.1355 34 89 45.8645 89 60.5V142H124V59C124 26.4152 97.5848 0 65 0H59Z"
                fill="#0043E9"
              />
              <g clip-path="url(#clip1_2023_9983)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M357 0C324.415 0 298 26.4152 298 59V142H334V60.5C334 45.8645 345.864 34 360.5 34C375.136 34 387 45.8645 387 60.5V142H422V59C422 26.4152 395.585 0 363 0H357Z"
                  fill="#0043E9"
                />
              </g>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M603 0C570.415 0 544 26.4152 544 59V142H580V60.5C580 45.8645 591.864 34 606.5 34C621.136 34 633 45.8645 633 60.5V142H668V59C668 26.4152 641.585 0 609 0H603Z"
                fill="#0043E9"
              />
            </g>
            <defs>
              <clipPath id="clip0_2023_9983">
                <rect width="668" height="142" fill="white" />
              </clipPath>
              <clipPath id="clip1_2023_9983">
                <rect
                  width="72"
                  height="142"
                  fill="white"
                  transform="translate(298)"
                />
              </clipPath>
            </defs>
          </svg> */}
          <BsFillMoonStarsFill className="text-[#0043e9] text-[100px]" />
        </Link>
      </div>
      {/* Khoi div chua cac tuy chon */}
      <div className="flex items-center w-1/3 justify-around text-[#0043e9] ">
        <Link
          to="/detail"
          className="nav-item"
        >
          Detail
        </Link>
        <Link
          to="/news"
          className="nav-item"
        >
          News
        </Link>
        <Link
          to="/contact"
          className="nav-item"
        >
          Contact
        </Link>
        <Link 
            to="/cart"
            className="nav-item"
        >
            <HiShoppingCart/>
        </Link>
      </div>
    </div>
  );
};

export default TopTab;



// phân tích layout
// div cha : bọc 2 khối div con
// div con 1 : chứa logo
// div con 2 : chứa các tuỳ chọn


// Thẻ Link import từ react-router-dom sẽ props quan trọng là 
// to + tên path được định nghĩa trong file RootRouter

