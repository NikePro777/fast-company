import React, { useState } from "react";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";
import Pagination from "./pagination";
import User from "./user";
import GroupList from "./groupList";
import api from "../api";

const Users = ({ users: allUsers, ...rest }) => {
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [professions] = useState(api.professions.fetchAll());
  const handlePageChange = (pageIndex) => {
    console.log("page", pageIndex);
    setCurrentPage(pageIndex);
  };
  const users = paginate(allUsers, currentPage, pageSize);
  const handleProfessionSelect = (param) => {
    console.log(param);
  };
  return (
    <>
      <GroupList items={professions} onItemSelect={handleProfessionSelect} />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился раз</th>
            <th scope="col">Оценка</th>
            <th scope="col">Избранное</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User key={user._id} {...rest} {...user} />
          ))}
        </tbody>
      </table>
      <Pagination
        itemsCount={allUsers.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};
Users.propTypes = {
  users: PropTypes.array.isRequired
};
export default Users;
