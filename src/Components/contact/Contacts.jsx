import React from 'react'
import { contactItems } from '../../Utilities/contact'
import TextHeader from '../defaultcomponent/TextHeader'


const Contacts = () => {
    return (
        <div id='Contact' className=' border mt-5 border-black border-solid rounded-[3em] p-5 gap-10'>
            <div className='flex flex-col w-full items-center mt-5'>
                <TextHeader>Contact</TextHeader>
                <div className='flex w-full justify-center'>
                    <div className=' sm:h-full flex flex-col p-5 gap-4 overflow-hidden '>
                        {contactItems.map((item, index) => {
                            return (
                                <a href={item?.link} className=' flex gap-2 items-center justify-start rounded-[2em] hover:bg-blue-200 p-3 ' key={index}>
                                    <img src={item.image} className='w-[2em] h-[2em]' />
                                    <div className='font-semibold min-w-[55px] md:min-w-[85px]'>{item.name} : </div>
                                    <p className='font-semibold truncate overflow-hidden break-keep'>{(item.name === 'phone' || item.name === 'email') ? item.detail : item.link}</p>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contacts