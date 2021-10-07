import React from "react";

export const UserCard = ({user}) => (
    <section className="userCard">
        <h3 className="username">{user.name}</h3>
    </section>
)