import React, { useState } from 'react'
import MedGrid from '../assets/MedGrid';
import EngGrid from '../assets/EngGrid'
import EntranceGrid from "../assets/EntranceGrid";

const Home = () => {
  const[window,setWindow]=useState(<EngGrid/>);

 
  return (
<> 

<div className='flex justify-center'>

{window}
</div>
</>
  );
};

export default Home;