import React, { useState, useEffect } from "react";
import api from "../app/api";
import Qualitie from "../app/components/qualitie";
import { useHistory } from "react-router-dom";

const User = (id) => {
  const history = useHistory();
  const [user, setUser] = useState();
  const back = () => {
    history.push("/users");
  };
  useEffect(() => {
    api.users.getById(id.id).then((data) => setUser(data));
  }, []);
  console.log(user);
  if (user) {
    return (
      <>
        <h1>{user.name}</h1>
        <h2>Профессия: {user.profession.name}</h2>
        <span>
          {user.qualities.map((user) => (
            <Qualitie key={user._id} {...user} />
          ))}
        </span>
        <h6>completed Meetings {user.completedMeetings}</h6>
        <h2>Rate: {user.rate}</h2>
        <button
          onClick={() => {
            back();
          }}
        >
          Все пользователи
        </button>
      </>
    );
  } else {
    return <h1>loading...</h1>;
  }
};
// User.propTypes = {
//   id: PropTypes.object
// };
// (<h1>{user.name}</h1>)
export default User;
