import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from "../../features/events/eventSlice"

const Events = () => {

const dispatch = useDispatch()

const {events} = useSelector((state) => state.events)

useEffect(() => {
  dispatch(getAll())
}, [])


const EventList = () => {
    if (events.length < 1) {
        return <></>;
    } else {
        return (
            <>
                {events.map((event) => (
                    <div key={event._id}>
                        <div>{event.title}</div>
                        <div>{event.description}</div>
                        <a href={event.url}>Enlace</a>
                    </div>
                ))}
            </>
        );
    }
};

return (
    <>
        <div>Events</div>
        <EventList />
    </>
);
};

export default Events;
