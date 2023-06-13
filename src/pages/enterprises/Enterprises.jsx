import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../features/enterprises/enterprisesSlice";
import Arrow from "../../components/arrow/Arrow";

import "./Enterprises.scss"

const Enterprises = () => {

  const { enterprises } = useSelector((state) => state.enterprises);
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(15);

  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY >= document.body.scrollHeight && window.innerWidth >= 768) || (window.innerHeight + window.scrollY >= document.body.scrollHeight && window.innerWidth < 768)) {
      setLimit(limit + 15);
    }
  }

  useEffect(() => {
    dispatch(getAll(limit));
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [limit])

  const enterprise = (enterprises.length > 0)
    ? enterprises.slice(0, limit).map((enterprise) => (
      <div key={enterprise._id} className="enterprises-list">
        <div className='enterprise-imag'><img  src={enterprise.logo} alt="logo" /></div>
        <p className='enterprise-name'>{enterprise.name} :</p>
        <p className='enterprise-description'>{enterprise.description}</p>
        <p className='enterpise-phase'>{enterprise.phase}</p>
        <p>
          {enterprise.topics.map((topic) => (
            <span className='topics' key={topic}>{topic}</span>
          ))}
        </p>
       <div className='div-contactar'> <button className='contactar'>Contactar</button></div>
      </div>
    ))
    : [];

  return (
    <div>
      <div className="enterprise-text">
        <Arrow />
        <h1>Empresas</h1>
      </div>
      {enterprise}
      {limit <= enterprises.length &&
        <div className="load-more" onClick={() => setLimit(limit + 15)}>Load More</div>
      }
    </div>
  )
}

export default Enterprises
