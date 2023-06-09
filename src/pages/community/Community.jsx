import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import "./Community.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../features/users/userSlice";
import { CgProfile } from "react-icons/cg";

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

        <div className="container-c-users">
          {users.slice(0, 4).map((user) => (
            <div className="card-users-c" key={user.id}>
              {user.image ? (
                <div className="img-container">
                  <img
                    src={`http://localhost:8080/images/user/${user.image}`}
                    alt=""
                  />
                </div>
              ) : (
                <CgProfile className="user-icon" />
              )}
              <h4>
                {user.name} {user.surname}
              </h4>
              <p>{user.program.translation}</p>
              <button>Contactar</button>
            </div>
          ))}
        </div>
        <p>Ver todo</p>
      </div>
      <NavBar />
    </>
  );
};

export default Community;
