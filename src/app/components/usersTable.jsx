import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import BookMark from "./bookmark";

const UserTable = ({
  users,
  onSort,
  selectedSort,
  handleToggleBookMark,
  handleDelete,
  ...rest
}) => {
  const columns = {
    name: { path: "name", name: "Имя" },
    qualities: { name: "Качества" },
    professions: { path: "profession.name", name: "Профессия" },
    completedMeetings: { path: "completedMeetings", name: "Встретился раз" },
    rate: { path: "rate", name: "Оценка" },
    bookmark: {
      path: "bookmark",
      name: "Избранное",
      component: (user) => (
        <BookMark
          status={user.bookmark}
          onClick={() => handleToggleBookMark(user._id)}
        />
      )
    },
    delete: {
      component: (user) => (
        <button
          onClick={() => handleDelete(user._id)}
          className="badge bg-danger"
        >
          delete
        </button>
      )
    }
  };

  return (
    <table className="table">
      <TableHeader {...{ onSort, selectedSort, columns }} />
      <TableBody {...{ columns, data: users }} />
      {/* <tbody>
        {users.map((user) => (
          <User key={user._id} {...rest} {...user} />
        ))}
      </tbody> */}
    </table>
  );
};

UserTable.propTypes = {
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  handleToggleBookMark: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default UserTable;
