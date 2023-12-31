import React from "react";
import { useSelector } from "react-redux";
import DateTimeConverter from "../dateTimeConverter/DateTimeConverter";
import { Link } from "react-router-dom";
import "./ChatCard.scss";
import Spinner from "../spinner/Spinner";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;



const ChatCard = () => {
  const imagePath = API_URL + "/images/user/";
  const { myChats } = useSelector((state) => state.chat);

  if (myChats.length < 1) return <><Spinner></Spinner></>;

  return (
    <>
      {myChats.map((chat) => (
        <Link
          to={`/chat/instant/${chat._id}`}
          style={{ textDecoration: "none" }}
        >
          <div key={chat._id} className="chatcontacts-card">
            <div className="contact-img-container">
              <img src={imagePath + chat.userIds[0].image} alt="" />
            </div>

            <div className="contact-details">
              <div>
                <p>
                  {chat.userIds[0].name} {chat.userIds[0].surname}
                </p>
                <div className="last-msg">
                  {chat.lastMsg ? (
                    <>
                      <span>{chat.lastMsg.sender}:</span>{" "}
                      {chat.lastMsg.content.length > 35
                        ? chat.lastMsg.content.slice(0, 35) + "..."
                        : chat.lastMsg.content}
                    </>
                  ) : (
                    <></>
                  )}
                </div>{" "}
              </div>
              <div>
                <div className="last-msg-time">
                  <DateTimeConverter datetime={chat.updatedAt} />
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ChatCard;
