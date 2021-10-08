

const remoteURL = "http://localhost:8088" 

export const getAllUsers = (users) => {

    return fetch(`${remoteURL}/users`)
    .then(res => res.json())
}

// export const getUserByName = (username) => {

//     return fetch (`${remoteURL}/users`)
//     .then(res => res.json())
// }

export const addFriend = (newFriend) => {

    return fetch(`${remoteURL}/friends`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newFriend)
    }).then(response => response.json())
  }

export const getAllFriends = (friends) => {

    return fetch (`${remoteURL}/friends?_expand=user`)
    .then(res => res.json())
}