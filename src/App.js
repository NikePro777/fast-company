import React, { useState } from "react";
import Users from "./app/components/users";
import SearchStatus from "./app/components/searchStatus";
import api from "./app/api/index";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  // const handleDelete = (userId) => {
  //   let timed = users.filter((item) => {
  //     return item._id !== userId.id;
  //   });
  //   setUsers(timed);
  // };
  // const renderColor = (number) => {
  //   let color = "m-2 badge bg-";
  //   if (number === 0) {
  //     color = color + "danger";
  //   } else {
  //     color = color + "primary";
  //   }
  //   return color;
  // };

  // const renderTabl = () => {
  //   return users.map((user) => (
  //     <tr key={user._id}>
  //       <td>{user.name}</td>
  //       <td>
  //         {user.qualities.map((item) => {
  //           const getColors = () => {
  //             let colors = "m-1 badge bg-";
  //             colors += item.color;
  //             return colors;
  //           };
  //           return (
  //             <span key={item._id} className={getColors()}>
  //               {item.name}
  //             </span>
  //           );
  //         })}
  //       </td>
  //       <td>{user.profession.name}</td>
  //       <td>{user.completedMeetings}</td>
  //       <td>{user.rate}</td>
  //       <td>
  //         <button
  //           key={user._id}
  //           onClick={() => handleDelete({ id: user._id })}
  //           className="badge bg-danger"
  //         >
  //           delete
  //         </button>
  //       </td>
  //     </tr>
  //   ));
  // };

  // const handleToggleBookMark = (id) => {};

  return <SearchStatus length={users.length} />;
  // , (<Users users={users} />);
};

export default App;
