import React from 'react'

function GalleryCard({title,price,image}) {
    console.log(title)
  return (
    
      <div className='Card border-solid  shadow-lg shadow-cyan-500/50 ...'>
        <div className="w-[70%] m-auto pb-4">
            <img src={image} alt='title' className='h-[250px] ' />
        </div>
        <div>
            <p className='px-4 pb-4'>{title}</p>
            <p className='pl-4 pb-4' >{price}</p>
        </div>
      </div>
    
  )
}

export default GalleryCard
