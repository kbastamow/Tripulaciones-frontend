import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

import { getAll } from "../../features/users/userSlice";
import NavBar from "../../components/navBar/NavBar";
import Header from "../../components/header/Header";
import Arrow from "../../components/arrow/Arrow";

const RecommendedUsersAll = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  return (
    <>
      <div className="content-container-main">
          <div className="community-container">
            <div className="sticky">
              <Header />
              <div className="contacto-text">
                <Arrow />
                <h1>Todos los usuarios</h1>
              </div>
            </div>
            <div className="container-c-users">
              {users.map((user) => (
                <div className="card-users-c" key={user._id}>
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
                  {user.program && user.program.translation ? (
                    <p>{user.program.translation}</p>
                  ) : (
                    <p>Program not specified</p>
                  )}
                  <div className="link">
                    <Link to={`/userDetails/${user._id}`}>
                      <button>Contactar</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <p>Ver todo</p>
          </div>
      </div>
      <NavBar />
    </>
  );
};

export default RecommendedUsersAll;

