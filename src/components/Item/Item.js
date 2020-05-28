import React, { useState, useEffect } from 'react'

const Item = ({title, remove, id, updateFunc, user, ...props}) => {
    const [clicked, setClicked] = useState(props.done)
    const [hovered, setHovered] = useState(false)
    const [deleteList, setDelete] = useState(false)

    const removeList = () => {
        console.log('clicked')
        setDelete(true)
    }

    useEffect(() => {
            let newArr = [...user.items]
            newArr = newArr.map(e => e.id === id ? ({...e, done: clicked}) : ({...e}))
            let newUser = {
                ...user,
                items: newArr
            }
            localStorage.setItem('user', JSON.stringify(newUser))
            updateFunc(true)
    },[clicked])

    useEffect(() => {
        if(deleteList){
            let newArr = [...user.items]
            newArr = newArr.filter(e => e.id !== id).map((e,i) => ({...e, id: i}))
            let newUser = {
                ...user,
                items: newArr
            }
            localStorage.setItem('user', JSON.stringify(newUser))
            updateFunc(true)
            setDelete(false)
        }
    },[deleteList])

    const done = () => {
        setClicked(!clicked)
    }

    return (
        <button 
            id={id}
            className='item' 
            onClick={() => done()}
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