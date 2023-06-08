import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import "./Community.scss";
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from "../../features/users/userSlice"

const Community = () => {

  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <>
      <div className="community-container">
        <div className="btns">
          <button>Mis contactos</button>
          <button>Mis grupos</button>
        </div>
        <h2>Gente que podrías conocer:</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
      <NavBar />
    </>
  );
};

export default Community;
