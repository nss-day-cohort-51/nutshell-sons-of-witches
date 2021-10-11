import React from "react";
import { useHistory } from "react-router";
import { addFriend } from "../../modules/FriendsManager";
import { getAllFriends } from "../../modules/FriendsManager";

export const UserCard = ({user, setFriends}) => {

    const history = useHistory();

    const AddFriendButton = (id) => {
        

     const currentUser = parseInt(sessionStorage.getItem("nutshell_user"))
     const getUserId = parseInt(id)
     const newFriend = {
        currentUserId: currentUser,
        userId: getUserId
    }  
        

        addFriend(newFriend) 
            .then(() => getAllFriends().then(setFriends))
            .then(() => history.push("/friends"))
            
        
    }


return(
    <section className="userCard">
        <h3 className="username">{user.name}</h3>

    <button
        
        type="button"
        className="button"
        id={user.id}
        onClick={(event) =>  AddFriendButton(event.target.id)}
       
    >
        Add Friend
    </button>
    </section>
)


}
