import React from 'react'
import PortfolioItem from './PortfolioItems'
import GYOD from '../assets/GYDO-loadScreen.png'
import teamGen from '../assets/teamgen.jpg'
import Gymder from '../assets/gymder_Login.jpg'
import nosql from '../assets/nosql.jpg'
import mysql from '../assets/mysql.jpg'
import handlebars from '../assets/handlebars.jpg'


export default function Portfolio() {
  return (
    <div id='portfolio' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Portfolio</h1>
            <p className='text-center py-8'>
              These are some of the projects and assignments that I have completed during my boot camp experience! These will be updated with personal side projects in the near future!
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <a href="https://github.com/RudezY/GetYourDrinkON-"><PortfolioItem img={GYOD} title='GetYourDrinkOn'/></a>
                <a href="https://github.com/RudezY/TeamProfileGen"><PortfolioItem img={teamGen} title='Team Profile Generator'/></a>
                <a href="https://github.com/RudezY/Gymder"><PortfolioItem img={Gymder} title='Gymder'/></a>
                <a href="https://github.com/RudezY/Tech-Blog"><PortfolioItem img={handlebars} title="Tech Blog"/></a>
                <a href="https://github.com/RudezY/SocialNetworkAPI"><PortfolioItem img={nosql} title="Social network API"/></a>
                <a href="https://github.com/RudezY/E-commerce-backend"><PortfolioItem img={mysql} title="E-commerce backend"/></a>
            </div>
    </div>
  )
}
