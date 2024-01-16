import React from 'react'
import { skills } from '../../Utilities/skills'
import TextHeader from '../defaultcomponent/TextHeader'

const Aboutme = () => {
    return (
        <div id='About_me' className='flex flex-col w-full items-center border mt-5 border-black border-solid rounded-[3em] p-5 gap-10'>
            <div className='flex gap-3 mt-5'>
                <div className='flex flex-col w-[50%] gap-3 lg:w-[55%] xl:w-[60%]'>
                    <TextHeader>About me</TextHeader>
                    <div className='flex flex-col items-start list-inside list-disc justify-start self-start gap-3'>
                        <p className='text-gray-500'>My name is <span className='text-black underline text-[1.2em]'>Tanu Tarathikhamporn</span>. You can call me <span className='text-black underline text-[1.2em]'>Qew</span>. I was Former Project Engineer at SCG Packaging transitioning to a dynamic career in web development. </p>
                        <p className='text-gray-500'>Completed intensive training with <span className='text-black underline text-[1.2em]'>Coursera and WeStride's developer program in Thailand</span>, specializing in Developer technologies.</p>
                        <p className='text-gray-500'>Eager to apply mechanical and problem-solving skills to create engaging and user-friendly web experiences. Ready to contribute to innovative projects as an entry-level <span className='text-black underline text-[1.2em]'>Developer</span>.</p>
                        <p className='text-gray-500 hidden sm:inline'>Outside of work, I enjoy <span className='text-black'>Badminton, Travel, Fishing</span>, bringing creativity and a well-rounded perspective to my professional endeavors.</p>

                    </div>
                    <div className='hidden sm:flex flex-col gap-3 mt-3 text-gray-500'>
                        <p></p>
                    </div>
                </div>
                <div className='flex flex-col gap-3 w-[50%] lg:w-[45%] xl:w-[40%] '>
                    <div className='flex flex-col gap-3'>
                        <TextHeader>Experience</TextHeader>
                        <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 flex flex-col items-start'>
                            <li>Learning in Coursera and Westride 2023</li>
                            <li>SCG Packaging 2016 - 2023 (Project Engineer)</li>
                            <li>Thai Takasago 2014 - 2016</li>
                            <li>Kasetsart University Bachelor degree 2014 - 2016</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <TextHeader>Job Experience</TextHeader>
                        <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 flex flex-col items-start'>
                            <li>Control project schedule</li>
                            <li>Control project budget</li>
                            <li>Lead project Construction & Installation</li>
                            <li>Machine design</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center'>
                <TextHeader>Skills</TextHeader>
                <div className='flex gap-10 flex-wrap mt-3 justify-center '>
                    {skills.map((item, index) => {
                        return (
                            <div className='flex flex-col items-center justify-between h-[7em] hover:scale-125' key={index}>
                                <img src={item.image} className='w-[5em]' />
                                <div>{item.name}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Aboutme