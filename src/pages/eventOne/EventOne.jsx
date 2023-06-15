import "./EventOne.scss";
import React, { useEffect } from "react";
import Arrow from "../../components/arrow/Arrow";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getById, joinEvent } from "../../features/events/eventSlice";
import logo from "../../assets/logo.png";
import { Button, Modal, Tag } from "antd";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiGroup } from "react-icons/bi";
import DateTimeConverter from "../../components/dateTimeConverter/DateTimeConverter";
import { SlLocationPin } from "react-icons/sl";
import EventModal from "../../components/modal/EventModal";
import Header from "../../components/header/Header";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
const imagePath = `${AP_URL}/images/event/`;

const EventOne = () => {
  const { id } = useParams();
  const { event, message, isError, isSuccess } = useSelector(
    (state) => state.events
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getById(id));
  }, [dispatch, id]);

  const attendEvent = (e) => {
    e.preventDefault();
    console.log(event._id);
    dispatch(joinEvent(event._id));
  };

  // useEffect(() => {
  //   if (isSuccess) {
  //     notification.success({
  //       message: "Success",
  //       description: message,
  //     });
  //   }
  //   if (isError) {
  //     notification.error({ message: "Error", description: message });
  //   }
  //   dispatch(reset())
  // }, [isSuccess, isError, message]);

  if (!event) {
    return <></>;
  } else {
    return (
      <>
        <div className="sticky">
          <Header />
          <div className="contacto-text">
            <Arrow />
            <h1>Evento</h1>
          </div>
        </div>

        <div className="eventone-content">
          <div className="eventone-img">
            <img src={event ? imagePath + event.image : logo} alt="" />
          </div>
          <div className="eventone-title">{event.title}</div>
          <div className="eventone-details card-text-event">
            <div>
              <span className="icon-event">
                <AiOutlineCalendar />
              </span>
              <span className="text-date">
                <DateTimeConverter datetime={event.date} />
              </span>
            </div>

            <div>
              <span className="icon-event">
                <BiGroup />
              </span>
              {event.userIds?.length || 0} asistentes
            </div>

            <div>
              <span className="icon-event">
                <SlLocationPin />
              </span>{" "}
              Edem escuela de empresarios
            </div>
          </div>
          <div className="categories">
            {event.categoryIds?.map((category) => (
              <p>{category.name}</p>
            ))}
          </div>

          <div className="eventone-buttons">
            <Button className="btn-eventone" onClick={attendEvent}>
              Asistiré
            </Button>
            <Button className="btn-eventone">Registrarse</Button>
            <span className="points">● ● ●</span>
          </div>
          <div className="eventone-categories"></div>
          <div className="eventone-description">
            <div className="eventone-title">Descripción del evento:</div>
            <div className="card-text-event">{event.description}</div>
          </div>
        </div>

        <EventModal></EventModal>
      </>
    );
  }
};

export default EventOne;
