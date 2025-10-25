import Balance from "./Balance"
import Services from "./Services"
import { useEffect, useRef } from "react";

function Main({accountnumber}){
    useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
    return(
        <>
        <Balance accountnumber={accountnumber}/>
        <h1 className="promotingline">WHERE YOUR MONEY GROWS SAFELY, AND YOUR TRUST STAYS STRONG</h1>
        <Services />
        </>
    )
}
export default Main