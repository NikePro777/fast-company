import React, { useState } from "react";
import api from "../API";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  // setUsers(users.json);
  // console.log(users.name);

  const handleDelete = (userId) => {};
  const renderPhrase = (number) => {};
  // console.log(users);

  const renderTabl = () => {
    return users.map((item) => <tr>{item.name}</tr>);
  };

  console.log(renderTabl);

  return (
    <>
      <h1>To you tussit</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился раз</th>
            <th scope="col">Оценка</th>
          </tr>
        </thead>

        <tbody>{renderTabl()}</tbody>
      </table>
    </>
  );
};

export default Users;
