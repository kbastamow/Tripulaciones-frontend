import React from 'react'

const DateTimeConverter = (props) => {

if (!props.datetime) {
  return <></>
}    
const day = props.datetime.slice(8,10)
const month = props.datetime.slice(5,7)
const year = props.datetime.slice(0,4)
const time = props.datetime.slice(11,16)
const dateFormat = `${day}/${month}/${year}`
let timeFormat = "";

if (time !== "00:00") timeFormat = `${time}h`


  return (
    <> <span>{dateFormat}</span> <span>{timeFormat}</span></>
  )
}

export default DateTimeConverter