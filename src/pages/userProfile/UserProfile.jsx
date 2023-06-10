import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getById } from "../../features/users/userSlice";
import { logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { FiLogOut, FiCalendar } from "react-icons/fi";

import Arrow from "../../components/arrow/Arrow";
import Banner from "../../assets/edem-banner.png";
import "./UserProfile.scss";

const UserProfile = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getById(id));
  }, []);

  function getOrdinal(number) {
    const words = [
      "",
      "Primero",
      "Segundo",
      "Tercero",
      "Cuarto",
      "Quinto",
      "Sexto",
    ];

    if (number >= 1 && number <= words.length - 1) {
      return words[number];
    }

    return `${number}th`;
  }
  const navigate = useNavigate();
  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  function mostrarParrafo(parrafo, numCaracteres) {
    if (parrafo.length <= numCaracteres) {
      return parrafo;
    } else {
      return parrafo.substring(0, numCaracteres) + "...";
    }
  }

  return (
    <div>
      <div className="contacto-text">
        <Arrow />
        <h1>Contacto</h1>
      </div>

      <div className="user-details">
        <img src={Banner} alt="" />
        <div className="info-container">
          <div className="img-container">
            <img
              src={`http://localhost:8080/images/user/${user.image}`}
              alt=""
            />
          </div>
          <div className="data">
            <p className="name">
              {user.name} {user.surname}
            </p>
            <p className="age">{user.age} años</p>
            {user && user.program && (
              <p className="grade">{user.program.translation}</p>
            )}
            <p className="year">{getOrdinal(user.year)} curso</p>
          </div>
        </div>

        <div className="bio">
          <p className="title">Bio:</p>
          <p className="content">{user.bio}</p>
        </div>
        <div className="bio">
          <p className="title">Intereses:</p>
          <div className="categories">
            {user &&
              user.categoryIds &&
              user.categoryIds.map((category) => <p>{category.name}</p>)}
          </div>
        </div>
        <div className="bio">
          <p className="title">Próximos eventos:</p>
          <div className="events">
            {user &&
              user.eventIds &&
              user.eventIds.map((event) => (
                <div>
                  <p>
                    <span className="icon">
                        <FiCalendar />
                    </span>
                    {mostrarParrafo(event.title, 30)}
                    <span className="span-ver">Ver</span>
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="div-logout">
        <span className="logout-icon">
          <FiLogOut />
        </span>
        <span className="logout" onClick={onLogout}>
          Logout
        </span>
      </div>
    </div>
  );
};

export default UserProfile;
