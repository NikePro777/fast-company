import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import PropTypes from "prop-types";

const UserEdit = ({ userId }) => {
  const history = useHistory();
  console.log(history);
  console.log(userId);
  return <h1>psssss</h1>;
};

UserEdit.propTypes = {
  userId: PropTypes.string.isRequired
};
export default UserEdit;
