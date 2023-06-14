import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../features/enterprises/enterprisesSlice";
import Header from "../../components/header/Header"
import Arrow from "../../components/arrow/Arrow";
import Banner from "../../assets/banner-e.png";
import { Link } from "react-router-dom";
import "./EnterpriseDetails.scss"




const EnterpriseDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { enterprise } = useSelector((state) => state.enterprises);

    useEffect(() => {

        dispatch(getById(id));

    }, []);
    return (
        <div>
            <div className="sticky">
                <Header />
                <div className="contacto-text">
                    <Arrow />
                    <h1>Empresas</h1>
                </div>
            </div>
            <div className="user-details">
        <img src={Banner} alt="" />
        <div className="info-container">
          <div className="img-container2">
            <img
              src={enterprise.logo}
              alt=""
            />
          </div>
          <div className="data">
            <p className="name">
              {enterprise.name}
            </p>
            <p className="age">{enterprise.phase}</p>
          </div>
        </div>
        <div className="btns">
          <Link to={"hola"}>
            <button>Contactar</button>
          </Link>
            <button >Enviar mensaje</button>
        </div>
        <div className="contenido">
            <div className="bio">
              <p className="title">Bio:</p>
              <p className="content">{enterprise.description}</p>
            </div>
            <div className="bio">
              <p className="title">Intereses:</p>
              <div className="categories">
                {enterprise &&
                  enterprise.topics &&
                  enterprise.topics.map((category) => <p key={category._id}>{category}</p>)}
              </div>
            </div>
        </div>
        
      </div>
        </div>
    );
};
export default EnterpriseDetails;

