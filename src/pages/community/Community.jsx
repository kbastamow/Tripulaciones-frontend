import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import "./Community.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../features/users/userSlice";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;


const Community = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <>
      <div className="content-container-main">
        <div className="community-container">
          <div className="sticky">
            <Header />
            <div className="btn-con">
              <button>Mis contactos</button>
              <button>Mis grupos</button>
            </div>
          </div>
          <h2>Gente que podrías conocer:</h2>
          <div className="container-c-users">
            {users.slice(0, 4).map((user) => (
              <div className="card-users-c" key={user._id}>
                {user.image ? (
                  <div className="img-container">
                    <img
                      src={`${API_URL}/images/user/${user.image}`}
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
                <div className="link">
                  <Link to={`/userDetails/${user._id}`}>
                    <button>Contactar</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Link to={`/recommendedUsers`}><p>Ver todo</p></Link>
        </div>
      </div>
      <NavBar />
    </>
  );
};

export default Community;
