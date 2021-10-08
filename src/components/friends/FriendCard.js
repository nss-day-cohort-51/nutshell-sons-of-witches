import React from "react";

export const FriendCard = ({friend}) => {

    return(
        <section>
            <h3 className="friend_name">{friend.user.name}</h3>
            <p>what the hell is happening where are my friends?</p>
        </section>
    )
}