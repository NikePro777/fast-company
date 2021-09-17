import React from "react";

const BookMark = ({ status, handleToggleBookMark, id }) => {
  return (
    <button key={id} onClick={() => handleToggleBookMark({ id })}>
      <i className={status}></i>
      {/* <i className="bi bi-bookmark-fill"></i> */}
    </button>
  );
};

export default BookMark;
