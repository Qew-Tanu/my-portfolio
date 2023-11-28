import React from 'react'

const TextHeader = (props) => {
    return (
        <h1 className='text-[1.5em] underline self-center font-semibold'>
            {props.children}
        </h1>
    )
}

export default TextHeader