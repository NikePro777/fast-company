import React from "react";

const BookMark = ({ status, id, ...rest }) => {
  status = "bi bi-bookmark";
  // console.log(rest);
  return (
    <button key={id} onClick={() => rest.handleToggleBookMark({ id })}>
      <i className={status}></i>
      {/* <i className="bi bi-bookmark-fill"></i> */}
    </button>
  );
};

export default BookMark;
