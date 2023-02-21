import React from 'react';
import three from '../assets/three.jpg';

const MedGrid = () => {

  const itemMed=[
    {id:1,
      src:three,
      title:"Anatomy I",
      price:"800"
    },
    {id:2,
      src:three,
      title:"Surgery I",
      price:"200"
    },
    {id:3,
      src:three,
      title:"Medicine I",
      price:"300"
    },
    {id:4,
      src:three,
      title:"Physician",
      price:"600"
    },
    {id:5,
      src:three,
      title:"Anatomy II",
      price:"250"
    },
    {id:6,
      src:three,
      title:"Surgery II",
      price:"200"
    },
    {id:7,
      src:three,
      title:"Cardiology",
      price:"100"
    },
    {id:8,
      src:three,
      title:"Cardio Surgery",
      price:"250"
    },
    {id:9,
      src:three,
      title:"Medicine",
      price:"300"
    },
  ];
  return (
    <>
     {/* container containing the books */}
     <div className='grid_cont flex justify-center h-fit w-full mx-6 md:w-3/4 hover:scale-90 duration-200 cursor-pointer mt-12'>
    
   
     {/*container containing the image element or container for individual   */}
   <div  className='w-full h-fit grid grid-cols-2 sm:grid-cols-4 gap-3 px-6 my-12 sm:px-0'>
     

     {/* individual listing */}
   
    {
       itemMed.map(({id,src,title,price})=>
       <div key={id} className='mx-auto shadow-md shadow-orange-300 py-3 img_cont rounded-md overflow-x-clip'>
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

export default MedGrid;