

const remoteURL = "http://localhost:8088" 

export const getAllUsers = (users) => {

    return fetch(`${remoteURL}/users`)
    .then(res => res.json())
}

export const getUserByName = (username) => {
    
    return fetch (`${remoteURL}/users`)
    .then(res => res.json())
}