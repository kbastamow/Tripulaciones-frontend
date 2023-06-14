import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import "./Community.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../features/users/userSlice";
import { getAllGroups } from "../../features/group/groupSlice"
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

const Community = () => {

  const dispatch = useDispatch();

  const { groups } = useSelector((state) => state.group);
  const { users } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAll());
    dispatch(getAllGroups())
  }, []);

  

  return (
    <>
      <div className="content-container-main"><div className="content-container-main">
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
                    <img src={`${API_URL}/images/user/${user.image}`} alt="" />
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
          <Link to={`/recommendedUsers`}>
            <p>Ver todo</p>
          </Link>

          <h2>Grupos que podrían interesarte:</h2>
      
      <div className="container-c-users">
            {groups.slice(0, 4).map((group) => (
              <div className="card-users-c" key={group._id}>
                {group.image ? (
                  <div className="img-container3">
                    <img src={`${API_URL}/images/group/${group.image}`} alt="" />
                  </div>
                ) : (
                  <CgProfile className="user-icon" />
                )}
                <h4>
                  {group.name}
                </h4>
                <p>{group.description}</p>
                <div className="link">
                  <Link to={`/userDetails/${group._id}`}>
                    <button>Unirse</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      <div>
    </div>
      

      </div>
      
      <NavBar />
    </>
  );
};

export default Community;
