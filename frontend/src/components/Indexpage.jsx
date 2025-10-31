import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HeroSection from "./HeroSection"; // <-- Add this line

function Indexpage() {
    const location = useLocation();
    const accountnumber = location.state?.accountnumber;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header />
            <HeroSection />
            <Main accountnumber={accountnumber} />
            <Footer />
            <Outlet />
        </>
    );
}

export default Indexpage;
