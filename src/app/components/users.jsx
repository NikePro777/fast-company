import React, { useState } from "react";
import User from "./user";

const Users = ({ users, handleDelete }) => {
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
          <button
            key={user._id}
            onClick={() => handleDelete({ id: user._id })}
            className="badge bg-danger"
          >
            delete
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{renderTabl()}</tbody>
      </table>
    </>
  );
};

export default Users;
