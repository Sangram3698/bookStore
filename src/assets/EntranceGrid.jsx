import React from 'react'
import three from '../assets/four.jpg';

const EntranceGrid = () => {

  const itemEntr=[
    {id:1,
      src:three,
      title:"PEA Maths",
      price:"800"
    },
    {id:2,
      src:three,
      title:"PEA English",
      price:"200"
    },
    {id:3,
      src:three,
      title:"PEA Physics",
      price:"300"
    },
    {id:4,
      src:three,
      title:"PEA Chemistry",
      price:"600"
    },
    {id:5,
      src:three,
      title:"EPCM",
      price:"250"
    },
    {id:6,
      src:three,
      title:"PCM",
      price:"200"
    },
    {id:7,
      src:three,
      title:"Fast Track",
      price:"100"
    },
    {id:8,
      src:three,
      title:"Booster",
      price:"250"
    },
    {id:9,
      src:three,
      title:"Refresher",
      price:"300"
    },
  ];

  return (
   <>
    {/* container containing the books */}
    <div className='grid_cont flex justify-center h-fit w-full mx-6 md:w-1/2 hover:scale-105 duration-200 cursor-pointer mt-12'>
    
   
    {/*container containing the image element or container for individual   */}
  <div  className='w-full h-fit grid grid-cols-2 sm:grid-cols-4 gap-3 px-6 my-12 sm:px-0'>
    

    {/* individual listing */}
  
   {
      itemEntr.map(({id,src,title,price})=>
      <div key={id} className='mx-auto shadow-md shadow-orange-300 py-3 img_cont rounded-md'>
        <img src={src} alt="pic" className='w-28 mx-5 rounded-md' />
        <h3 className=' text-sm text-center font-medium text-black'>{title}</h3>
        <p  className=' text-sm text-center font-medium text-black'>Rs.{price}</p>
      </div>
      )
    }
  
  
   </div>
  </div>
   </>
  )
}

export default EntranceGrid;