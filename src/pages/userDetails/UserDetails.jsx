import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getById } from "../../features/users/userSlice";
import Arrow from "../../components/arrow/Arrow";
import Banner from "../../assets/edem-banner.png";
import "./UserDetails.scss";
import { Link } from "react-router-dom";
import { FiCalendar } from "react-icons/fi";
import {findOrCreate} from "../../features/chat/chatSlice"
import Header from "../../components/header/Header";
const API_URL = import.meta.env.VITE_REACT_APP_API_URL;


const UserDetails = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user } = useSelector((state) => state.user);
  const { chat, chatIsSuccess } = useSelector((state => state.chat))
  
 
 const handleCreateChat = (e) => {
  e.preventDefault()
  dispatch(findOrCreate(id))
 }

 useEffect(() => {
  if (chat && chatIsSuccess) {
    setTimeout(() => {
    navigate("/chat/instant/" + chat._id)
    }, 2000);
  }
 }, [chatIsSuccess])

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

  function mostrarParrafo(parrafo, numCaracteres) {
    if (parrafo.length <= numCaracteres) {
        return parrafo;
    } else {
        return parrafo.substring(0, numCaracteres) + "...";
    }
}

return (
  <div>
    <div className="sticky">
          <Header />
          <div className="contacto-text">
            <Arrow />
            <h1>Contacto</h1>
          </div>
        </div>

    <div className="user-details">
      <img src={Banner} alt="" />
      <div className="info-container">
        <div className="img-container">
          <img src={`${API_URL}/images/user/${user.image}`} alt="" />
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
      <div className="btns">
        <Link to={`/chat/${user._id}`}>
          <button>Contactar</button>
        </Link>
        <button onClick={handleCreateChat}>Enviar mensaje</button>
      </div>
      <div>
        {user.bio && (
          <div className="bio">
            <p className="title">Bio:</p>
            <p className="content">{user.bio}</p>
          </div>
        )}
        {user.categoryIds && user.categoryIds.length > 0 && (
          <div className="bio">
            <p className="title">Intereses:</p>
            <div className="categories">
              {user.categoryIds.map((category) => (
                <p key={category._id}>{category.name}</p>
              ))}
            </div>
          </div>
        )}
        {user.eventIds && user.eventIds.length > 0 && (
          <div className="bio">
            <p className="title">Próximos eventos:</p>
            <div className="events">
              {user.eventIds.map((event) => (
                <div key={event._id}>
                  <p>
                    <span className="icon">
                      <FiCalendar />
                    </span>
                    {mostrarParrafo(event.title, 30)}
                    <span className="span-ver">
                      <Link className="link-event" to={`/events/${event._id}`}>
                        Ver
                      </Link>
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);
};

export default UserDetails;
