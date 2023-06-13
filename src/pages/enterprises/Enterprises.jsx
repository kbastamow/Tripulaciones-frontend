import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../features/enterprises/enterprisesSlice";
import Header from "../../components/header/Header"
import NavBar from "../../components/navBar/NavBar"
import "./Enterprises.scss"

const Enterprises = () => {

  const { enterprises } = useSelector((state) => state.enterprises);
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(16);
  const [filter, setFilter] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');



  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY >= document.body.scrollHeight && window.innerWidth >= 768) || (window.innerHeight + window.scrollY >= document.body.scrollHeight && window.innerWidth < 768)) {
      setLimit(limit + 16);
    }
  }

  useEffect(() => {
    dispatch(getAll(limit, filter));
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [limit, filter]);

  const handleFilter = (category) => {
    setFilter(category);
    setSelectedTopic('');
    setLimit(16);
  };

  const enterprise = (enterprises.length > 0)
    ? enterprises
      .filter((enterprise) => {
        if (selectedTopic === '') {
          return true;
        }
        return enterprise.topics.includes(selectedTopic);
      })
      .slice(0, limit)
      .map((enterprise) => (
        <div key={enterprise._id} className="enterprises-list">
          <div className='enterprise-imag'><img src={enterprise.logo} alt="logo" /></div>
          {/* <p className='enterprise-name'>{enterprise.name} :</p> */}
          <p className='enterprise-description'>{enterprise.description.length > 60 ? enterprise.description.slice(0, 60) + '...' : enterprise.description}</p>
          <p className='topics-container'>
            {enterprise.topics.slice(0, 2).map((topic) => (
              <span className='topics' key={topic}>
                {topic.length > 6 ? topic.slice(0, 6) + '...' : topic}
              </span>
            ))}
          </p>
          <div className='div-contactar'>
            <button className="contactar" onClick={() => console.log('Contactar:', enterprise.name)}>Contactar</button>
          </div>
        </div>
      ))
    : [];

  return (
    <div>
      <div className="sticky">
        <Header />
        <div className="enterprise-menu">
          <span className={`blue-menu-btn${filter === '' ? ' blue-menu-active' : ''}`} onClick={() => handleFilter('')}>Todas</span>
          <span className={`blue-menu-btn${filter === 'Lanzadera' ? ' blue-menu-active' : ''}`} onClick={() => handleFilter('Lanzadera')}>Lanzadera</span>
          <span className={`blue-menu-btn${filter === 'Angels' ? ' blue-menu-active' : ''}`} onClick={() => handleFilter('Angels')}>Angels</span>
        </div>
        <div className="enterprise-h2"><h2>Empresas que coinciden con tus intereses :</h2></div>
      
      <select
        className="topic-filter"
        value={selectedTopic}
        onChange={(event) => setSelectedTopic(event.target.value)}
      >
        <option value="">Filtrar por categoria</option>
        {enterprises.map((enterprise) => (
          enterprise.topics.map((topic, index) => (
            <option
              key={`${enterprise.id}-${index}`}
              value={topic}
              
            >
              {topic}
            </option>
          ))
        ))}
      </select>
      </div>
      <div className="enterprise-general-container">
        <div className="enterprise-container">
          {enterprise}
          {limit <= enterprises.length &&
            <div className="load-more" onClick={() => setLimit(limit + 16)}>Load More</div>
          }
        </div>
      </div>
      <NavBar />
    </div>
  )
}

export default Enterprises
