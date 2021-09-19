import React from "react";

const BookMark = ({ id, ...rest }) => {
  console.log(rest.status);
  let marks = "bi bi-bookmark";
  rest.status ? (marks = marks + "-full") : (marks = marks);
  return (
    <button key={id} onClick={() => rest.handleToggleBookMark({ id })}>
      <i className={marks}></i>
      {/* <i className="bi bi-bookmark-fill"></i> */}
    </button>
  );
};

export default BookMark;
