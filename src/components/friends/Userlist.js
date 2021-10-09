import React, { useEffect, useState } from "react";
import { getAllUsers, addFriend } from "../../modules/FriendsManager";
import { UserCard } from "./UserCard";




export const UserList = () => {

    const [searchTerms, setSearchTerms] =useState("");

    const [users, setUsers] = useState([]);

    const [filteredUsers, setFilteredUsers] = useState([]);
  
    const getUsers = () => {

        return getAllUsers().then(usersFromAPI => {
            setUsers(usersFromAPI)
        })
    };

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
       

    useEffect(() => {
        getUsers();
      }, []);


      return (
          <>
            <input 
            type= "text"
            className="userSearch"
            value={searchTerms}
            onChange={(e) => setSearchTerms(e.target.value)}
            />

            <div className="container-cards">
                {filteredUsers.map(user =>
                <UserCard
                    key={user.name}
                     user = {user}
                />)}
                
            </div>
    </>        
    );
};