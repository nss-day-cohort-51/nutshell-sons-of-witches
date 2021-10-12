import React from "react";

export const FriendCard = ({friend, handleDeleteFriend}) => {

    return(
        <section>
            <h3 className="friend_name">{friend.user.name}</h3>
            <button className="friend-button" type="button" onClick={() => handleDeleteFriend(friend.id)}>GOOML</button>
               
        </section>
    )
}