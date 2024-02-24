import React, { useEffect, useState } from 'react'
import axios from 'axios'
import GalleryCard from './GalleryCard'

function Gallery() {
    const [arr,setArr]=useState([])
    const [load,setLoad]=useState(false)

   async function FetchData(){
    setLoad(true)
    try {
        let Resp=await axios.get(`https://fakestoreapi.com/products`);
        console.log(Resp.data)
        setArr(Resp.data)
        setLoad(false)
    } catch (error) {
        console.log(error);
    }
   }

   console.log(arr);
   
    useEffect(()=>{
        FetchData();
    },[])

    return (
        <div>
           {
            load === true ? (
                <div>
                    <img src='https://i.stack.imgur.com/ATB3o.gif' alt="Loading..." />
                </div>
            ) : (
                <div className='Main_Container w-[80%] m-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 sm:w-[95%] md:w-[95%] gap-4'>
                    {arr.map((el, i) => (
                        <GalleryCard key={i} {...el} />
                    ))}
                </div>
            )
           }
        </div>
    );
    
}

export default Gallery
