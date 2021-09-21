import React, { useState } from "react";
import Users from "./app/components/users";
import SearchStatus from "./app/components/searchStatus";
import api from "./app/api/index";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers(
      users.filter((item) => {
        return item._id !== userId.id;
      })
    );
  };

  const handleToggleBookMark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          user.status = !user.status;
        }
        return user;
      })
    );
  };

  return (
    <>
      <SearchStatus length={users.length} />
      <Users
        users={users}
        handleDelete={handleDelete}
        handleToggleBookMark={handleToggleBookMark}
      />
    </>
  );
};

export default App;
