import React, { useState } from "react";
import Users from "./app/components/users";
import SearchStatus from "./app/components/searchStatus";
import api from "./app/api/index";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  // let [status, setStatus] = useState(false);
  let timing = users.filter((item) => {
    item.status = false;
    return item;
  });
  let acc;
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
    acc = timing.findIndex((item) => {
      let value = Object.values(id);
      return item._id === value[0];
    });
    timing[acc].status = !timing[acc].status;
    return timing[acc].status;
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
        status={timing[acc].status}
      />
    </>
  );
};

export default App;
