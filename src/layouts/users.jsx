import React from "react";
import UsersList from "../app/components/usersList";
import UserPage from "../app/components/userPage";
import { useParams } from "react-router-dom";

const Users = () => {
  const params = useParams();
  const { userId } = params;
  return <>{userId ? <UserPage userId={userId} /> : <UsersList />}</>;
};

export default Users;
