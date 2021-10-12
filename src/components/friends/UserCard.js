import React from "react";
import { useHistory } from "react-router";
import { addFriend } from "../../modules/FriendsManager";
import { getAllFriends } from "../../modules/FriendsManager";

export const UserCard = ({user, setFriends, friends}) => {

    const history = useHistory();

    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"))

    const AddFriendButton = (id) => {
        

     
     const getUserId = parseInt(id)
     const newFriend = {
        currentUserId: currentUser,
        userId: getUserId
    }  
        

        addFriend(newFriend) 
            .then(() => getAllFriends().then(setFriends))
            // .then(() => history.push("/friends"))
            
        
    }

            
return(
    <section className="userCard">
        <h3 className="username">{user.name}</h3>

    
    {friends.find(friend => friend.userId === user.id) ?
            "" :
        
        
            <button
            type="button"
            className="friend-button"
            key={user.id}
            id={user.id}
            onClick={(event) =>  AddFriendButton(event.target.id)}
        >
            Add Friend
            </button>
        }
    
    
  
        
    </section>
)


}
