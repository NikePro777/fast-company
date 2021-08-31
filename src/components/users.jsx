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
    return users.map((user) => (
      <tr key={user._id}>
        <td>{user.name}</td>
        <td>
          {user.qualities.map((item) => {
            const getColors = () => {
              let colors = "m-1 badge bg-";
              colors += item.color;
              return colors;
            };

            return (
              <span key={item._id} className={getColors()}>
                {item.name}
              </span>
            );
          })}
        </td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}</td>
        <td>
          <button className="badge bg-danger">delete</button>
        </td>
      </tr>
    ));
  };

  // console.log(renderTabl);

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
