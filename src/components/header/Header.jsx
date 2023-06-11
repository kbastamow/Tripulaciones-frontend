import "./Header.scss"
import Logo from "../../assets/logo.png";
import { useNavigate } from 'react-router-dom';
import { FiBell } from "react-icons/fi";


const Header = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

    const handleUserClick = () => {
        navigate(`./userProfile/${userData._id}`)
    };

    return (
        
            <nav>
                <div><img className="imag-header" src={Logo} alt="Marina de empresas" /></div>
                <div>
                    <FiBell/>
                    <button className='user-img' onClick={handleUserClick}>
                        <img src={`http://localhost:8080/images/user/${userData.image}`} alt="User" />
                    </button>
                </div>
            </nav>
       
    );
};
export default Header;
