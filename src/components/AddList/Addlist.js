import React, { useState } from 'react'

const AddList = ({user, updateFunc}) => {
    const [itemTitle, setItemTitle] = useState('')
    
    const addList = (e) => {
        if(e.keyCode === 13){
            let newList = {
                title: itemTitle,
                id: 0,
                done: false
            }

            let newArr = [...user.items, newList]
            newArr = newArr.map((e, i) => ({...e, id: i}))
           
            let newUser = {
                ...user, 
                items: newArr
            } 
            
            localStorage.setItem('user', JSON.stringify(newUser))
            updateFunc(true)
            setItemTitle('')
        }
    }

    return (
        <div>
            <input 
                type='text' 
                value={itemTitle} 
                onChange={(e) => setItemTitle(e.target.value)} 
                onKeyDown={(e) =>  addList(e)} />
        </div>
    )
}

export default AddList