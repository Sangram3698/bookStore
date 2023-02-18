import React from 'react'
import two from '../assets/two.jpg'
import Cards from '../utility/Cards'
const Home = () => {
  const item=[
    {id:1,
      src:two,
      title:"Quantum Physics",
      price:"800"
    },
    {id:2,
      src:two,
      title:"chemistry",
      price:"200"
    },
    {id:3,
      src:two,
      title:"Maths",
      price:"300"
    },
    {id:4,
      src:two,
      title:"Physcis",
      price:"600"
    },
    {id:5,
      src:two,
      title:"Applied Mechanics",
      price:"250"
    },
    {id:6,
      src:two,
      title:"Drawinh I",
      price:"200"
    },
    {id:7,
      src:two,
      title:"Drawing II",
      price:"100"
    },
    {id:8,
      src:two,
      title:"ECT",
      price:"250"
    },
    {id:9,
      src:two,
      title:"Machine I",
      price:"300"
    },
  ];
  return (
    //whole sliding division
   <div className='sliding flex items-center justify-center   my-6'>


    {/* container containing the books */}
    <div className='grid_cont flex justify-center h-1/2 w-1/2 hover:scale-110 duration-200 cursor-pointer '>


      {/*container containing the image element or container for individual   */}
    <div  className='flex-1 max-w-4xl mx-auto p-10'>

      {/* individual listing */}
    <ul className='grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-6'>
      {
        item.map(({id,src,title,price})=>
        <li id={id}>
          <Cards img={src} title={title} cost={price}/>
        </li>
        )
      }
    </ul>
     </div>
    </div>
   </div>
  );
};

export default Home;