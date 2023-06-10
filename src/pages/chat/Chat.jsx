import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../features/users/userSlice";

const Chat = () => {
    const { id } = useParams();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getById(id));
  }, []);

  return (
    <div>
    {user.name}
<br />
<input type="text" />    
    </div>
    
  )
}

export default Chat