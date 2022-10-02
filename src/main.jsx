import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)


// file root : tên main.jsx hoặc index.jsx hoặc index.js

// vào fileroot 
// import {BrowserRouter} from 'react-router-dom'

// BrowserRouter : bọc toàn bộ app, tạo ra 1 bộ định tuyến nội bộ cho trang web, bao gồm các trang con
// bộ đính tuyến router sẽ giúp chúng ta di chuyển đến các component khác nhau trong trang web mà không gây re-load lại trang web
// nó sẽ khác với khi mình dùng thẻ <a/> : thẻ a sẽ gây re-load lại trang => trải nghiệm người dùng không tốt