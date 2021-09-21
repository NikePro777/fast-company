import React from "react";
import BookMark from "./bookmark";
import Qualitie from "./qualitie";

const User = ({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  handleDelete,
  bookmark,
  handleToggleBookMark,
}) => {
  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>
        {qualities.map((qual) => (
          <Qualitie key={qual._id} {...qual} />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}/5</td>
      <td>
        <BookMark status={bookmark} onClick={() => handleToggleBookMark(_id)} />
      </td>
      <td>
        <button
          key={_id}
          onClick={() => handleDelete({ id: _id })}
          className="badge bg-danger"
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default User;
