import React, { useState } from "react";
import api from "../api/index";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    let timed = users.filter((item) => {
      return item._id !== userId.id;
    });
    setUsers(timed);
  };

  const renderColor = (number) => {
    let color = "m-2 badge bg-";
    if (number === 0) {
      color = color + "danger";
    } else {
      color = color + "primary";
    }
    return color;
  };

  const renderPhrase = (number) => {
    let phrase = " с тобой сегодня";
    if (
      number < 10 &&
      (number % 10 === 2 || number % 10 === 3 || number % 10 === 4)
    ) {
      phrase = " человека тусанут" + phrase;
    } else {
      phrase = " человек тусанет" + phrase;
    }
    if (number === 0) {
      phrase = "Никто с тобой не тусанет";
      return phrase;
    }
    return number + phrase;
  };

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
      <h1 style={{ fontSize: 20 }} className={renderColor(users.length)}>
        {renderPhrase(users.length)}
      </h1>
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
