import "./Header.scss";
import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import { FiBell } from "react-icons/fi";

const Header = () => {
    const userData = JSON.parse(localStorage.getItem('user'));

    return (
        <nav>
            <div>
                <img className="imag-header" src={Logo} alt="Marina de empresas" />
            </div>
            <div>
                <FiBell />
                <Link to={`/userProfile/${userData._id}`} className='user-img'>
                    <img src={`http://localhost:8080/images/user/${userData.image}`} alt="User" />
                </Link>
            </div>
        </nav>
    );
};

export default Header;

