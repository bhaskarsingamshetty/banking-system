import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";
import HeroSection from "./HeroSection"; 

function Indexpage() {
    const serviceRef = useRef(null);
    const location = useLocation();
    const accountnumber = location.state?.accountnumber;

    return (
        <>
            <Header />
            <HeroSection  serviceRef={serviceRef}/>
            <Main accountnumber={accountnumber}serviceRef={serviceRef} />
            <Footer serviceRef={serviceRef}/>
            <Outlet />
        </>
    );
}

export default Indexpage;
