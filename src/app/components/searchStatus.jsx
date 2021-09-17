import React from "react";

const SearchStatus = ({ length, renderPhrase, renderColor }) => {
  return (
    <>
      <h1 style={{ fontSize: 20 }} className={renderColor(length)}>
        {renderPhrase(length)}
      </h1>
    </>
  );
};

export default SearchStatus;