import "./EventOne.scss"

import React, { useEffect } from 'react'

import { SlArrowLeft } from "react-icons/sl";
import Arrow from "../../components/arrow/Arrow";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getById } from "../../features/events/eventSlice";


const EventOne = () => {
const { id } = useParams();
const dispatch = useDispatch();
useEffect(() => {
  dispatch(getById(id));
}, []);

  return (
    <>
    <Arrow></Arrow>
    <div className="flex-column-container">
    
    <div>eventOne</div>
    </div>
  </>
  )
}

export default EventOne