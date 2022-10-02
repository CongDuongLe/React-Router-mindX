import React from 'react'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import News from '../pages/News'

import {Routes, Route} from 'react-router-dom'
import Detail from '../pages/Detail'
import Cart from '../pages/Cart'

const RootRoute = () => {
  return (
    <div className='w-full min-h-screen bg-blue-300 pt-[60px] '>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path='/detail' element={<Detail/>}/>
            <Route path='/cart' element={<Cart/>}/>  
        </Routes>

    </div>
  )
}

export default RootRoute

// khi có chiều cao của thanh navbar = 60px, navbar position là fixed
// => bắt buộc khối root route (content container) sẽ có padding-top
// bằng với chiều cao của thanh navbar để trảnh trường hợp
// navbar sẽ che đi 1 phần content của khối content container

// Routes : sẽ là component cha, chứa các route con (Route)
// Route : sẽ là các component con, chứa content sẽ được hiển thị lên trên
// trình duyệt 

// Route : sẽ có 2 props quan trọng
// path : đường dẫn của route
// element : Component chứa content sẽ được hiển thị lên trên trình duyệt

// cú pháp khai báo router 
// Bước 1 : bọc tất cả các Route trong 1 cặp tag <Routes> ... </Routes>
// Bước 2 : sẽ khai báo tên path + component sẽ được hiển thị lên trên trình duyệt tương ứng với path đó


// của anh : 127.0.0.1:5173
// các bạn : localhost:3000 

// 2 dãy số trên có chức năng tương đương, nên tuỳ vào trình duyệt hiển thị ntn thì mình sẽ debug theo dãy số đó


// component RootRoute : chỉ là khối bọc các phần hiển thị của trang web 
// để hiện thị content, mình sẽ cần phải viết style, logic trong element nằm trong Route