import React, { useState } from 'react';
import "./Dropdown.scss"
import { logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  //const { user } = useSelector((state) => state.auth);


  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout())
    setTimeout(() => {
      navigate('/login')
    }, 1000)

  };
  const dropdownOptions = ['Option 1', 'Option 2', 'Option 3', <span onClick={onLogout}>Logout</span>];
  const userData = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="dropdown-container">
      <button className='user-img' onClick={handleDropdownClick}><img src={`http://localhost:8080/images/user/${userData.image}`} alt="User" /></button>
      {isOpen && (
        <div className="dropdown-options">
          {dropdownOptions.map((option) => (
            <div
              key={option}
              className={`dropdown-option ${selectedOption === option && 'selected' }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
