import React from "react";
import { useHistory } from "react-router";
import { addFriend } from "../../modules/FriendsManager";


export const UserCard = ({user}) => {

    const history = useHistory();

    const AddFriendButton = (id) => {
        

     const currentUser = parseInt(sessionStorage.getItem("nutshell_user"))
     const getUserId = parseInt(id)
     const newFriend = {
        currentUserId: currentUser,
        userId: getUserId
    }  


        addFriend(newFriend) 
            .then(() => history.push("/friends"))
        
    }

return(
    <section className="userCard">
        <h3 className="username">{user.name}</h3>

    <button
        
        type="button"
        className="button"
        id={user.id}
        onClick={(event) => AddFriendButton(event.target.id)}
    >
        Add Friend
    </button>
    </section>
)
}
