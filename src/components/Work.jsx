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
