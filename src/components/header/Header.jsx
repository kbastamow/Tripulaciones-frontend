import "./Header.scss"
import Logo from "../../assets/logo.png";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

    const handleUserClick = () => {
        navigate(`./userProfile/${userData._id}`)
    };

    return (
        <nav>
            <img className="imag-header" src={Logo} alt="Marina de empresas" />
            <button className='user-img' onClick={handleUserClick}>
                <img src={`http://localhost:8080/images/user/${userData.image}`} alt="User" />
            </button>

        </nav>
    );
};
export default Header;
