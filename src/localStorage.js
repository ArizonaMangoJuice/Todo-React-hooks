export const SetdefaultItem = (callback) => {
    let obj = {
        items: [ 
            {
                title: 'get up',
                id: 0,
                done: false
            },
            {
                title: 'stand up',
                id: 1,
                done: false
            },
            {
                title: 'dont give up the fight.',
                id: 2,
                done: false
            },
            {
                title: 'save the world',
                id: 3,
                done: true
            },
            {
                title: 'do something else',
                id: 4,
                done: false
            }
        ]
    }

    localStorage.setItem('user', JSON.stringify(obj))
    
    callback(localStorage.getItem('user'))
}


export const removeItem = id => {
    
}