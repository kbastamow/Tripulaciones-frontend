import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import "./Community.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../features/users/userSlice";

const Community = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.user);

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
        
          {users.slice(0, 4).map((user) => (
            <p key={user.id}>{user.name}</p>
          ))}
        
      </div>
      <NavBar />
    </>
  );
};

export default Community;


