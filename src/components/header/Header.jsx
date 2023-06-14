import "./Header.scss";
import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import { FiBell } from "react-icons/fi";
import { useSelector } from "react-redux";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

const Header = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const {user} = useSelector(state => state.auth)

   if (user) { 
    return (
        <nav>
            <div>
                <img className="imag-header" src={Logo} alt="Marina de empresas" />
            </div>
            <div>
                <FiBell />
                <Link to={`/userProfile/${user._id}`} className='user-img'>
                    <img src={`${API_URL}/images/user/${user.image}`} alt="User" />
                </Link>
            </div>
        </nav>
    );
};

    return (
        <nav>
            <div>
                <img className="imag-header" src={Logo} alt="Marina de empresas" />
            </div>
            <div>
                <FiBell />
                <Link to={`/userProfile/${userData._id}`} className='user-img'>
                    <img src={`${API_URL}/images/user/${userData.image}`} alt="User" />
                </Link>
            </div>
        </nav>
    );
};

export default Header;

