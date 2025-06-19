import React from 'react';

interface UserListProps{
    users:string[];
}


export const UserList: React.FC<UserListProps> = ({users})=>{
    return (
        <ul>
            {
                users.map((user, index)=>
                (
                    <li key={index}>{user}</li>
                ))
            }
        </ul>
    )
}

export default UserList;