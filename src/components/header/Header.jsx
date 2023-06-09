import "./Header.scss"
import Dropdown from "../dropdown/Dropdown";
import Logo from "../../assets/logo.png";

const Header = () => {

    return (
        <nav>
            <img className="imag-header" src={Logo} alt="Marina de empresas" />
            <Dropdown />
        </nav>
    );
};
export default Header;
