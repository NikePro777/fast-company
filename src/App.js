import React from "react";
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
  return;
  (<SearchStatus />), (<Users users={users} />);
};

export default App;
