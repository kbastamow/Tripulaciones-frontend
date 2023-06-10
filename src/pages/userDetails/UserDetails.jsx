import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../features/users/userSlice";
import Arrow from "../../components/arrow/Arrow";
import Banner from "../../assets/edem-banner.png";
import "./UserDetails.scss";

const UserDetails = () => {
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
        <div>
              <button>Conectar</button>
              <button>Enviar mensaje</button>
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
      </div>
    </div>
  );
};

export default UserDetails;
