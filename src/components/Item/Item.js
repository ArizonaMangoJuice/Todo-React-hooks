import React, { useState } from 'react'

const Item = ({title, remove, id}) => {
    const [clicked, setClicked] = useState(false)
    const [hovered, setHovered] = useState(false)

    return (
        <button 
            id={id}
            className='item' 
            onClick={() => setClicked(!clicked)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <input 
                className='checkbox'
                readOnly
                type='checkbox' 
                checked={clicked ? 'checked' : ''}
                />
            <p 
                className={
                    `item-title 
                    ${hovered ? 'light-purple' : ''}
                    ${clicked ? 'crossed' : ''}`
                    }>{title}</p>
            <div  className={hovered ? 'remove fadein' : 'hidden' }>-</div>
        </button>
    )
}

export default Item