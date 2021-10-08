import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../modules/FriendsManager";
import { useHistory } from "react-router";
import { UserCard } from "./UserCard";
import { getUserByName } from "../../modules/FriendsManager";

export const UserList = () => {

    const [searchTerms, setSearchTerms] =useState("");

    const [users, setUsers] = useState([]);

    const [filteredUsers, setFilteredUsers] = useState([]);

    const history = useHistory();

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