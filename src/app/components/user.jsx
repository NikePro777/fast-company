import React from "react";
import BookMark from "./bookmark";
import Qualitie from "./qualitie";

const User = ({ users, handleDelete }) => {
  const renderTabl = () => {
    return users.map((user) => (
      <tr key={user._id}>
        <td>{user.name}</td>
        <td>
          <Qualitie user={user} />
        </td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}</td>
        <td>{<BookMark />}</td>
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
      <tbody>{renderTabl()}</tbody>
    </>
  );
};

export default User;
