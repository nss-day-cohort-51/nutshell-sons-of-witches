import React from "react";
import { getAllUsers } from "../../modules/FriendsManager";
import { useEffect, useState } from "react/cjs/react.development";
import {  deleteFriend, getAllFriends } from "../../modules/FriendsManager";
import { FriendCard } from "./FriendCard";
import { UserCard } from "./UserCard"
import "./FriendsList.css"

export const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    const [searchTerms, setSearchTerms] =useState("");

    const [users, setUsers] = useState([]);

    const [filteredUsers, setFilteredUsers] = useState([]);
  
    const getUsers = () => {

        return getAllUsers().then(usersFromAPI => {
            setUsers(usersFromAPI)
        })
    };

    const handleDeleteFriend = id => {
        deleteFriend(id)
          .then(() => getAllFriends().then(setFriends));
      };


    const getFriends = () => {
        return getAllFriends().then(friendsFromAPI => {
            setFriends(friendsFromAPI)
            
        });
    };

    useEffect(() => {
        getFriends();
        getUsers()
    },[]);

    useEffect(() => {
          
        if (searchTerms !== "")  {
        
            const matchingUsers = users.filter(user => user.name.toLowerCase().includes(searchTerms.toLowerCase()))
            setFilteredUsers(matchingUsers)
        }
        else {
            setFilteredUsers(users)
        }
},[searchTerms, users]
);

    return (
        <>  
            
        

            <div className="user-container-cards">
            <section className="friendsList">
            <h2>My Friends</h2>
            <div className="list">
               
                {friends.map(friend =>
                <FriendCard 
                   key={friend.user.name}
                   friend= {friend}  
                   handleDeleteFriend={handleDeleteFriend}/>  
               
                )}
</div>
            </section>
            <div className="usersearch">   
            <label for="usersearch">Find a User</label>
                 <input id="usersearch" type= "text" className="userSearch"
                 value={searchTerms}
                 onChange={(e) => setSearchTerms(e.target.value)}
            /></div>
            <div className="userlist">
                {filteredUsers.map(user =>
                <UserCard
                    key={user.name}
                     user = {user}
                     setFriends= {setFriends}
                />)}
                </div>
            </div>

      
        </>
    )
};