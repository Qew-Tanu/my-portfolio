import React from 'react'
import TextHeader from '../defaultcomponent/TextHeader'
import { projects } from '../../Utilities/projects'


const Projects = () => {
    return (
        <div id='Projects' className='flex flex-col w-full items-center border mt-5 border-black border-solid rounded-[3em] p-5 gap-10'>
            <TextHeader>Pojects</TextHeader>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
                {projects.map((item, index) => {
                    return (
                        <a href={item.link} key={index} className='flex flex-col justify-start items-center border border-solid border-black rounded-[1em] p-3 gap-3 group'>
                            <div className=' flex flex-col justify-start items-center relative gap-3'>
                                <img src={item.image} />
                                <div className='flex flex-col justify-start items-center '>
                                    <div className='text-[1em] underline text-center font-semibold'>{item.name}</div>


                                </div>
                                <div className='hidden group-hover:absolute w-full h-full bg-black bg-opacity-50 group-hover:flex justify-center items-center '>
                                    <div className='text-center text-white'>{item.detail}</div>
                                </div>
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects