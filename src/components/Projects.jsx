import React from 'react'
import ProjectItem from './ProjectItem'
import GYOD from '../assets/GYDO-loadScreen.png'
import teamGen from '../assets/teamgen.jpg'
import Gymder from '../assets/gymder_Login.jpg'



export default function Projects() {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque deserunt itaque velit commodi officiis nostrum ad vero unde, similique necessitatibus, aliquam alias. Perferendis dolorem obcaecati dignissimos voluptatum quas temporibus placeat?
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={GYOD} title='GetYourDrinkOn'/>
                <ProjectItem img={teamGen} title='Team Profile Generator'/>
                <ProjectItem img={Gymder} title='Gymder'/>
            </div>
    </div>
  )
}
