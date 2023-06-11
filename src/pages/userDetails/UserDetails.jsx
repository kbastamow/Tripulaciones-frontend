import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getById } from "../../features/users/userSlice";
import Arrow from "../../components/arrow/Arrow";
import Banner from "../../assets/edem-banner.png";
import "./UserDetails.scss";
import { Link } from "react-router-dom";
import {findOrCreate} from "../../features/chat/chatSlice"
import {resetChat} from "../../features/chat/chatSlice"

const UserDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const { chat, chatIsSuccess } = useSelector((state => state.chat))
  dispatch(resetChat())
 


 const handleCreateChat = (e) => {
  e.preventDefault()
  console.log(user._id)
  console.log(id)

  dispatch(findOrCreate(user._id))
 }

 useEffect(() => {
  console.log(chatIsSuccess)
  if (chatIsSuccess) {
    console.log(chatIsSuccess)
    setTimeout(() => {
    navigate("/chat/kat/" + chat._id)
    }, 500);
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
        <div className="btns">
          <Link to={`/chat/${user._id}`}>
            <button>Contactar</button>
          </Link>
          <Link to={`/chat/${user._id}`}>
            <button>Enviar mensaje</button>
          </Link>
          {/* <Link to={`/chat/kat/${user._id}`}> */}
            <button onClick={handleCreateChat}>ABRIR PRUEBA KAT</button>
          {/* </Link> */}
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
