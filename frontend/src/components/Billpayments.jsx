import Footer from "./Footer"
import Menubar from "./Menubar"
import Services from "./Services"
import electricitybill from "../assets/electricitybill.png"
import Usingcards from "./usingcards"
import waterbill from "../assets/waterbill.png"
import cylinder from "../assets/cylinder.png"
import { useEffect, useRef } from "react";

function Billpayments(){
    useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
    return(
        <>
        <Menubar />
        <div className="featurespage">
            <div className='featurescontainer'>
            <Usingcards image={electricitybill}message={'electricitybill'}/>
            <Usingcards image={waterbill}message={'waterbill'}/> 
            <Usingcards image={cylinder}message={'Lpg cylinder'}/>
            </div>
            <div className='cotationconatiner'>
            <h1 className='cotationcontent lineanimation fallanimation'>Paying bills made simple—swift, secure, and stress-free</h1>
            </div>
        </div>
        <Services />
        <Footer/>
        </>
    )
}
export default Billpayments