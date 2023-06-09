import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { useParams } from "react-router-dom";

import { getById } from "../../features/users/userSlice";

const UserDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getById(id));
  }, []);

  return (
    <div>
      <h1>AsistenteDetails</h1>
      
          <p>{user.name}</p>
          <p>{user.surname}</p>
       
    </div>
  );
};

export default UserDetails;
