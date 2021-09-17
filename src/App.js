import React, { useState } from "react";
import Users from "./app/components/users";
import SearchStatus from "./app/components/searchStatus";
import api from "./app/api/index";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    let timed = users.filter((item) => {
      return item._id !== userId.id;
    });
    setUsers(timed);
  };

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

  const renderColor = (number) => {
    let color = "m-2 badge bg-";
    if (number === 0) {
      color = color + "danger";
    } else {
      color = color + "primary";
    }
    return color;
  };

  const handleToggleBookMark = (id) => {
    console.log(id);
    const marks = "bi bi-bookmark";
    users._id.marks = marks;
    const [status, setStatus] = useState(false);
    {
      setStatus(!status);
      status ? (marks = marks + "-full") : (marks = marks);
    }
    return status;
  };

  return (
    <>
      <SearchStatus
        length={users.length}
        renderPhrase={renderPhrase}
        renderColor={renderColor}
      />
      <Users
        users={users}
        handleDelete={handleDelete}
        handleToggleBookMark={handleToggleBookMark}
      />
    </>
  );
};

export default App;
