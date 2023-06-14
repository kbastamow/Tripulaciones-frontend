import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../features/enterprises/enterprisesSlice";
import Header from "../../components/header/Header"
import Arrow from "../../components/arrow/Arrow";



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
            <div>
                <div><img src={enterprise.logo} /></div>
                <p>{enterprise.name}</p>
                <p>{enterprise.phase}</p>
                <p>{enterprise.topics}</p>
                <p>{enterprise.description}</p>
            </div>
        </div>
    );
};
export default EnterpriseDetails;

