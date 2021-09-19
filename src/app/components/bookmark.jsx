import React from "react";

const BookMark = ({ id, users, ...rest }) => {
  let marks = "bi bi-bookmark";
  let acc = users.findIndex((item) => {
    return item._id === id;
  });
  users[acc].status ? (marks = marks + "-fill") : (marks = marks);
  return (
    <button key={id} onClick={() => rest.handleToggleBookMark(id)}>
      <i className={marks}></i>
    </button>
  );
};

export default BookMark;
