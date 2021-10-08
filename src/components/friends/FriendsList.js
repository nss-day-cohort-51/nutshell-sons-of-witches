import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { getAllFriends } from "../../modules/FriendsManager";
import { FriendCard } from "./FriendCard";


export const FriendsList = () => {
    const [friends, setFriends] = useState([]);

 

    const getFriends = () => {
        return getAllFriends().then(friendsFromAPI => {
            setFriends(friendsFromAPI)
            
        });
    };

    useEffect(() => {
        getFriends();
        
    },[]);


    return (
        <>
            <section>
                {friends.map(friend =>
                <FriendCard 
                   key={friend.user.name}
                   friend= {friend} />   
                )}
            </section>
        </>
    )
};