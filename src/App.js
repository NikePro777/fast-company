import React, { useState, useEffect } from "react";
import Users from "./app/components/users";
import api from "./app/api/index";

const App = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data));
  }, []);

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
          return { ...user, bookmark: !user.bookmark };
        }
        return user;
      })
    );
  };
  return (
    <>
      {users && (
        <Users
          users={users}
          handleDelete={handleDelete}
          handleToggleBookMark={handleToggleBookMark}
        />
      )}
    </>
  );
};

export default App;
