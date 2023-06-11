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
<<<<<<< HEAD
        
            <nav>
                <div><img className="imag-header" src={Logo} alt="Marina de empresas" /></div>
                <div>
                    <FiBell/>
                    <button className='user-img' onClick={handleUserClick}>
                        <img src={`http://localhost:8080/images/user/${userData.image}`} alt="User" />
                    </button>
                </div>
            </nav>
       
=======
        <nav>
            <img className="imag-header" src={Logo} alt="Marina de empresas" />
            <button className='user-img' onClick={handleUserClick}>
                {userData ? <img src={`http://localhost:8080/images/user/${userData.image}`} alt="User" /> : <></>}
            </button>

        </nav>
>>>>>>> 660b3c679b8d88e9fd3e4941530d701c1c787779
    );
};
export default Header;
