import Footer from "./Footer";
import Menubar from "./Menubar"
import Services from "./Services"
import { useEffect, useRef } from "react";

function Upi(){
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus(); // Automatically focus input on mount
    }, []);
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
return(
    <>
    <Menubar />
    <div className="upicontainer">
    <form className="upiform">
        <label>Enter upi id</label>
        <input
        ref={inputRef}
        type="text"
        name="upiid"
        className="upiinput"
        placeholder="Enter upi id"
        />
        <label>Enter Amount</label>
        <input 
        type="number"
        name="amount"
        className="upiinput"
        placeholder="Enter Amount"
        />
        <button type="submit"className="upibutton"onClick={(e)=>e.preventDefault()}>Send</button>
    </form>
    </div>
    <Services />
    <Footer/>
    </>
)
}
export default Upi