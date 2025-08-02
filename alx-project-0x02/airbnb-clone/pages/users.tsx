import React from "react";
import UserCard from "../components/UserCard"; // ✅ Make sure this path is correct
import { UserProps } from "../interfaces";

const users: UserProps[] = [
  {
    id: 1,
    name: "Jane Doe",
    email: "jane@example.com",
    address: {
      street: "123 Main St",
      city: "Lagos",
    },
  },
  {
    id: 2,
    name: "John Smith",
    email: "john@example.com",
    address: {
      street: "456 Elm St",
      city: "Abuja",
    },
  },
];

const UsersPage = () => {
  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};

export default UsersPage;