import { IoSearch } from "react-icons/io5";
import Menubar from "./Menubar";
import logo from '../assets/logo2.png';
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem('token'); // Clear token
        localStorage.removeItem('accountNumber'); // Also clear account number
        navigate('/'); // Redirect to login page
    }

    return (
        <div className="container">
            <div className="header">
                {/* Group logo and heading */}
                <div className="header-left">
                     <img src={logo} alt="Trust One Bank Logo" className="logo" onClick={() => navigate('/index')} />
                     <div className="heading" onClick={() => navigate('/index')}>Trust One Bank</div>
                </div>
                {/* Menu section */}
                <div className="menu">
                    <form className="searchform" onSubmit={(e) => e.preventDefault()}> {/* Added form and preventDefault */}
                        <input
                            type="text"
                            placeholder="Search here"
                            id="search"
                            aria-label="Search" // Added aria-label for accessibility
                        />
                        <button type="submit" className="searchbutton" aria-label="Submit search"><IoSearch /></button> {/* Added aria-label */}
                    </form>
                    {/* Use button for logout for better semantics */}
                    <button onClick={handleLogout} style={{ cursor: 'pointer', background: 'none', border: 'none', color: 'white', fontSize: '1rem' }}>Log Out</button>
                </div>
            </div>
            {/* Menubar remains below header */}
            <Menubar />
        </div>
    )
}

export default Header;