import React from 'react';
import Slider from '@/components/Slider';
import Featured from "@/components/Featured";
import News from "@/components/News";
import Topics from "@/components/Topics";

function ContainerHome() {
  return (
    <div className='max-w-7xl mx-auto bg-white dark:bg-black transition-colors duration-300'>
      <Slider />
      <Featured />
      <News />
      <Topics />
    </div>
  );
}

export default ContainerHome;
