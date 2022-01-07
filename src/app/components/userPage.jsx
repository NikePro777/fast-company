import React, { useState, useEffect } from "react";
import api from "../api";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import QualitiesList from "./qualitiesList";

const UserPage = ({ userId }) => {
  const history = useHistory();
  const [user, setUser] = useState();
  const handleClick = () => {
    history.push("/users");
  };
  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data));
  }, []);
  if (user) {
    return (
      <>
        <h1>{user.name}</h1>
        <h2>Профессия: {user.profession.name}</h2>
        <QualitiesList qualities={user.qualities} />
        <h6>completed Meetings {user.completedMeetings}</h6>
        <h2>Rate: {user.rate}</h2>
        <button
          onClick={() => {
            handleClick();
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
UserPage.propTypes = {
  userId: PropTypes.string.isRequired
};

export default UserPage;
