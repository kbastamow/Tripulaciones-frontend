import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../features/enterprises/enterprisesSlice";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header"
import NavBar from "../../components/navBar/NavBar"
import "./Enterprises.scss"
import Spinner from '../../components/spinner/Spinner';


const Enterprises = () => {

  const { enterprises } = useSelector((state) => state.enterprises);
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(16);
  const [filter, setFilter] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedDate, setSelectedDate] = useState('');



  // const handleScroll = () => {
  //   if ((window.innerHeight + window.scrollY >= document.body.scrollHeight && window.innerWidth >= 768) || (window.innerHeight + window.scrollY >= document.body.scrollHeight && window.innerWidth < 768)) {
  //     setLimit(limit + 16);
  //   }
  // }

  // useEffect(() => {
  
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [limit, filter, selectedDate]);

  const handleFilter = (category) => {
    setFilter(category);
    setSelectedTopic('');
    setLimit(16);
  };

  const handleDateFilter = (date) => {
    setFilter(date);
    setSelectedDate('');
  };


useEffect(() => {
  dispatch(getAll(limit, filter, selectedDate));

}, [])

if (enterprises?.length < 1) {
  return <Spinner />;
}


const enterprise = (enterprises?.length > 0)
    ? enterprises
      .filter((enterprise) => {
        if (selectedTopic === '') {
          return true;
        }
        return enterprise.topics.includes(selectedTopic);
      })
      .filter((enterprise) => {
        if (selectedDate === '') {
          return true;
        }
        return enterprise.updatedAt.slice(0, 10).includes(selectedDate) ;
      })
      .slice(0, limit)
      .map((enterprise) => (
        <div key={enterprise._id} className="enterprises-list">
          <div className='enterprise-imag'><img src={enterprise.logo} alt="logo" /></div>
          <p className='enterprise-description'>{enterprise.description.length > 60 ? enterprise.description.slice(0, 60) + '...' : enterprise.description}</p>
          <p className='topics-container'>
            {enterprise.topics.slice(0, 2).map((topic) => (
              <span className='topics' key={topic}>
                {topic.length > 6 ? topic.slice(0, 6) + '...' : topic}
              </span>
            ))}
          </p>
          <div className='div-contactar'>
            <button className="contactar"><Link className="link-event" to={`/enterpriseDetails/${enterprise._id}`}> Contactar</Link></button>
          </div>
        </div>
      ))
    : <></>;

    const topics = [...new Set(enterprises.flatMap((enterprise) => enterprise.topics))];

    const topicFilter = topics.length > 0 ? (
      <select
        className="topic-filter"
        value={selectedTopic}
        onChange={(event) => setSelectedTopic(event.target.value)}
      >
        <option value="">Filtrar por categoría</option>
        {topics.map((topic) => (
          <option
            key={topic}
            value={topic}
          >
            {topic}
          </option>
        ))}
      </select>
    ) : <></>;

  const dates = [
    ...new Set(enterprises.map((enterprise) => enterprise.updatedAt)),
  ];
  const dateFilter =
    dates.length > 0 ? (
      <select
        className="date-filter"
        value={selectedDate}
        onChange={(event) => handleDateFilter(event.target.value)}
      >
        <option value="">Filter by date</option>
        {dates.sort((a, b) => new Date(b) - new Date(a)).map((date) => (
          <option
           key={date}
            value={date}
            >
              {date.slice(0, 10)}
              </option>
        ))}
      </select>
    ) : <></>;
    

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
        <div className="filter-div">
          <div>
            {(enterprises?.length > 0) ? topicFilter : <></>}
          </div>
          <div className="date-filter-div">
            {(enterprises?.length > 0) ? dateFilter : <></>}
          </div>
        </div>
      </div>
      <div className='content-container-main'>
        <div className="enterprise-general-container">
          <div className="enterprise-container">
            {
              enterprises?.length > 0 ? (
                <>
                  {enterprise}
                  
                </>
              ) : <></>
            }
          </div>

          <div className='load-more-container'>
            {
                enterprises?.length > 0 ? (
                  <>
                    
                    {limit <= enterprises.length && (
                      <div className="load-more" onClick={() => setLimit(limit + 16)}>Ver mas</div>
                    )}
                  </>
                ) : <></>
              }
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  )
}

export default Enterprises
