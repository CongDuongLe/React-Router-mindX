import React, { useState } from 'react'


import RootRoute from './routes/RootRoute'
import TopTab from './pages/components/TopTab'
import LearnUseIcon from './pages/icon/LearnUseIcon'

function App() {
  

  return (
    <div>
      <TopTab/>  
      {/* TopTab : sẽ là thanh navbar */}
      <RootRoute/>
      {/* 
        RootRoute : sẽ là khối content container
      */}
    </div>
  )
}

export default App


// div : wrapper toàn bộ content, tránh trường hợp bị lỗi khi render