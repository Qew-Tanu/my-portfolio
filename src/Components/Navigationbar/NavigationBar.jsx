import React from 'react'
import { navbarItem } from '../../Utilities/NavigationLink'
import './NavigationBar.css'
import { Button, Stack } from '@mui/material'

const NavigationBar = () => {
    return (
        <nav className='relative w-full bg-white h-[3em] flex justify-center'>
            <div className='flex justify-center w-full items-center h-[3em] fixed z-10 bg-white'>
                {/* <div className='myLogoName'>
                <img src="" alt="" />
                <h1>Tanu Tarathikhamporn (Qew)</h1>
            </div> */}
                <div className='flex justify-center sm:justify-center w-full'>
                    {navbarItem.map((item, index) => {
                        return (
                            <a variant="outlined" href={item.link} key={index} className='group'>
                                <div className='flex m-1 items-center'>
                                    <img src={item.image} className='w-[2em] h-auto m-2 group ' />
                                    <h2 className='hidden group-hover:flex '>{item.name}</h2>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar