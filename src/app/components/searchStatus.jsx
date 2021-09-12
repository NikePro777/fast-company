import React from "react";

const SearchStatus = ({ length }) => {
  const renderPhrase = (length) => {
    let phrase = " с тобой сегодня";
    if (
      length < 10 &&
      (length % 10 === 2 || length % 10 === 3 || length % 10 === 4)
    ) {
      phrase = " человека тусанут" + phrase;
    } else {
      phrase = " человек тусанет" + phrase;
    }
    if (length === 0) {
      phrase = "Никто с тобой не тусанет";
      return phrase;
    }
    return length + phrase;
  };
};

export default SearchStatus;
