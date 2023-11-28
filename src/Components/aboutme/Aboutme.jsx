import React from 'react'
import { skills } from '../../Utilities/skills'
import TextHeader from '../defaultcomponent/TextHeader'

const Aboutme = () => {
    return (
        <div id='About_me' className='flex flex-col w-full items-center border mt-5 border-black border-solid rounded-[3em] p-5 gap-10'>
            <div className='flex gap-3'>
                <div className='flex flex-col w-[50%] gap-3 lg:w-[55%] xl:w-[60%]'>
                    <TextHeader>About me</TextHeader>
                    <div className='flex flex-col items-start list-inside list-disc justify-start self-start gap-3'>
                        <p className='text-gray-500'>My name is Tanu Tarathikhampor. You can call me <span className='text-black underline'>Qew</span>. I was working in Mechanical engineer in <span className='text-black underline'>Siam Cement group in Packaging business (SCG Packaging)</span> before. I was <span className='text-black underline'>project engineer</span>. My work is about control the whole project and also deep control in Civil work such as Building work, Mechanical work such as Mechine installation and Piping work. </p>
                        <p className='text-gray-500'> And I also interrest in Computer program. So I start to learn about computer programing and now, I decide to reskill about Web Developer with <span className='text-black underline'>Coursera and Westride</span> to learn about how to make website</p>
                    </div>
                    <div className='hidden sm:flex flex-col gap-3 mt-3 text-gray-500'>
                        <div>Fullname: <span className='text-black'>Tanu Tarathikhamporn</span></div>
                        <div>Nickname: <span className='text-black'>Qew</span></div>
                        <div>Age : <span className='text-black'>32 Years old</span></div>
                        <div>Date of Birth: <span className='text-black'>November 2, 1991</span></div>
                    </div>


                </div>
                <div className='flex flex-col gap-3 w-[50%] lg:w-[45%] xl:w-[40%] '>
                    <div className='flex flex-col gap-3'>
                        <TextHeader>Experience</TextHeader>
                        <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 flex flex-col items-start'>
                            <li>Learning in Coursera and Westride 2023</li>
                            <li>SCG Packaging 2016 - 2023</li>
                            <li>Thai Takasago 2014 - 2016</li>
                            <li>Kasetsart University Bachelor degree 2014 - 2016</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <TextHeader>Job Experience</TextHeader>
                        <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 flex flex-col items-start'>
                            <li>Control project schedule</li>
                            <li>Control project budget</li>
                            <li>Machine and piping installation work</li>
                            <li>Civil work (Building and Foundation)</li>
                            <li>Machine modify</li>
                            <li>Machine design</li>
                            <li>Piping design</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center'>
                <TextHeader>Skills</TextHeader>
                <div className='flex gap-10 flex-wrap mt-3 justify-center '>
                    {skills.map((item, index) => {
                        return (
                            <div className='flex flex-col items-center justify-between h-[7em]' key={index}>
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