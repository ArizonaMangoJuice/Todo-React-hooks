import React, { useState } from 'react'

const Item = ({title, remove, id, updateFunc, user}) => {
    const [clicked, setClicked] = useState(false)
    const [hovered, setHovered] = useState(false)

    const removeList = () => {
        let newArr = [...user.items]
        newArr = newArr.filter(e => e.id !== id).map((e,i) => ({...e, id: i}))
        let newUser = {
            ...user,
            items: newArr
        }
        localStorage.setItem('user', JSON.stringify(newUser))
        updateFunc(true)
    }

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
            <div onClick={() => removeList()}  className={hovered ? 'remove fadein' : 'hidden' }>-</div>
        </button>
    )
}

export default Item