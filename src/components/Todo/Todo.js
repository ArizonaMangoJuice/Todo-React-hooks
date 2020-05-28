import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Item from '../Item/Item'
import {SetdefaultItem} from '../../localStorage'
import AddList from '../AddList/Addlist'

// localStorage.clear();

const Todo = props => {
    const [user, setUser] = useState('')
    const [updated, setUpdated] = useState(false)
    let items
    let parsedUser

    useEffect(() => {
        if(!localStorage.getItem('user')){
            SetdefaultItem(setUser)
        } 
        if(localStorage.getItem('user'))setUser(localStorage.getItem('user')) 
    },[user])

    useEffect(() => {
        if(updated) {
            setUser(localStorage.getItem('user'))
            setUpdated(false)
        }
    },[updated])

    if(user) {
        parsedUser = JSON.parse(user)
        items = parsedUser.items.map(
            ({title, id, done}) => 
                <Item done={done} key={id} title={title} id={id} />)
    }

    return (
        <div className='main-container'>
            <div className='todo-container'>
                <Header />
                {user ? items : 'loading'}
                <AddList updateFunc={setUpdated} user={parsedUser}/>
            </div>
        </div>
    )
}

export default Todo