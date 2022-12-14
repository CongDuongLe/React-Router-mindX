import React from 'react'

const News = () => {
  return (
    <div className='main'>News
      <div aria-label="card-item-v1" className="flex flex-col w-[400px]">
        <div className="relative flex-shrink-0 mb-5 h-[250px]">
          <img
            src="https://bit.ly/3zzCTUT"
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="flex flex-col flex-1">
          <h3 className="mb-3 text-lg font-bold">
            Welcome to the best place to travel on the world
          </h3>
          <div className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default News