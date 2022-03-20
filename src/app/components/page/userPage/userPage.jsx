import React, { useState, useEffect } from "react";
import api from "../../../api";
import PropTypes from "prop-types";
import UserCard from "../../ui/userCard";
import QuakitiesCard from "../../ui/qualitiesCard";

const UserPage = ({ userId }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data));
  }, []);

  if (user) {
    return (
      <div className="container">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <UserCard user={user} />
            <QuakitiesCard data={user.qualities} />
            <h6>completed Meetings {user.completedMeetings}</h6>
            <h2>Rate: {user.rate}</h2>
          </div>
          <div className="col-md-8">
            <button>Изменить</button>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>loading...</h1>;
  }
};
UserPage.propTypes = {
  userId: PropTypes.string.isRequired
};

export default UserPage;
