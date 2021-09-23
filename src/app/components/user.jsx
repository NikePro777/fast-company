import React from "react";
import PropTypes from "prop-types";
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
  handleToggleBookMark
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
User.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  qualities: PropTypes.array.isRequired,
  profession: PropTypes.object.isRequired,
  completedMeetings: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  handleDelete: PropTypes.function.isRequired,
  bookmark: PropTypes.boolean.isRequired,
  handleToggleBookMark: PropTypes.function.isRequired
};
export default User;
