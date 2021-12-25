import React from "react";
import Users from "./users";
import User from "./user";
import { useParams } from "react-router-dom";

const Quation = () => {
  const params = useParams();
  console.log(params.userId);
  return <>{params.userId ? <User id={params.userId} /> : <Users />}</>;
};

export default Quation;
