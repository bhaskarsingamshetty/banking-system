import { IoSearch } from "react-icons/io5";
import Menubar from "./Menubar";
import logo from '../assets/logo2.png';
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem('token'); // Clear token
        navigate('/'); // Redirect to login page (adjust if your route is different)
    }

    return (
        <div className="container">
            <div className="header">
                <img src={logo} alt="" className="logo" />
                <div className="heading">Trust One Bank</div>
                <div className="menu">
                    <div className="searchform">
                        <input
                            type="text"
                            placeholder="search here"
                            id="search"
                        />
                        <button type="submit" className="searchbutton"><IoSearch /></button>
                    </div>
                    <span onClick={handleLogout} style={{ cursor: 'pointer' }}>Log Out</span>
                </div>
            </div>
            <Menubar />
        </div>
    )
}

export default Header;
