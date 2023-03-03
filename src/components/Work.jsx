import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2023,
        title: "Sushi Chef",
        duration: '10 Years',
        details: 'Create, serve, and maintain all sushi related products. Retain overall customer satisfaction.'
    },
    {
        year: 2013,
        title: "Logistics",
        duration: '2 Years',
        details: 'Unload and stock all products received from distribution center. Remove all products past expiration date and restock overstocked products.'
    }
]



export default function Work() {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>About Me</h1>
            <h2 className='text-2xl  mb-10  text-center text-stone-500'>I'm a recent graduate of UCI's Coding Boot Camp. Leaving the restaurant industry and venturing into the life of software and web development. I'm currently honing my current skill set as well as expanding my skills with other self taught skills, such as, AWS, Python, and Typescript. Join me on my adventures of becoming a skilled developer. </h2>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item, idx)=>(
            <WorkItem 
            key={idx} 
            year={item.year} 
            title={item.title} 
            duration={item.duration} 
            details={item.details}/>
        ))}
    </div>
  )
}
