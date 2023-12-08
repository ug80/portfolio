import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Ulises Giordano. Please take a look around.</p>
            </div>
            <div>
              <p>There are plenty of reasons why coding is so fascinating to me. 
                Firstly,  the  problem-solving  aspect  is incredibly rewarding. 
                I love tackling challenges and  finding  creative solutions, and 
                coding allows me to do that  every day. Secondly, the feeling of 
                creating something from  scratch and seeing it come  to  life is
                truly satisfying. Plus, the constant  learning  and evolution in 
                the tech field  keep things exciting  and  ensure there's always 
                something new to explore. Overall, the blend of logic, creativity, 
                and continuous  growth is what I find most appealing about coding.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
