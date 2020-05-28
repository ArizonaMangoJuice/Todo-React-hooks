import React from 'react'

const AddList = ({user, updateFunc}) => {
    const addList = (e) => {
        if(e.keyCode === 13){
            let newList = {
                title: e.target.value,
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
        }
    }

    return (
        <div>
            <input type='text' onKeyDown={(e) =>  addList(e)} />
        </div>
    )
}

export default AddList