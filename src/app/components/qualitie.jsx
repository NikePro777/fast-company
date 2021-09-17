import React from "react";
const Qualitie = ({ user }) => {
  return user.qualities.map((item) => {
    const getColors = () => {
      let colors = "m-1 badge bg-";
      colors += item.color;
      return colors;
    };
    return (
      <span key={item._id} className={getColors()}>
        {item.name}
      </span>
    );
  });
};

export default Qualitie;
