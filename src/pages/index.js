import React from 'react';
import Image from 'next/image';


const HomePage = () => {

  // Your component logic here
  return (
    <>
    <div className='text-lg border'>Home Page</div>;

      <div>
        <Image  className=' w-full h-auto'  src={"/assets/download.jpeg"} width={1900} height={1900} alt='Home slider image'></Image>
      </div>
    
    </>
  )
  
  
};

export default HomePage;
