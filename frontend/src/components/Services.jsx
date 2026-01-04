import Card from "./Card"
import loan from '../assets/loan.jpg'
import passbook from '../assets/passbook.jpg'
import cards from '../assets/cards.jpeg'
import insurence from '../assets/insurence.png'
import bills from '../assets/bils.jpeg'
import history from '../assets/history.png'
import upi from '../assets/upi.png'
import invest from '../assets/Invest.jpeg'
import { Link } from 'react-router-dom';
import { forwardRef } from "react";

const Services = forwardRef((props, ref) => {
    return (
        <div className="services" ref={ref}>
            <p className="serviceheading">Services provided by bank</p>

            <div className="cardconatiner">
                <Link to='/loan'><Card image={loan} servicename='Loan' /></Link>
                <Link to='/cards'><Card image={cards} servicename='Cards' /></Link>
                <Link to='/insurence'><Card image={insurence} servicename='Insurance' /></Link>
                <Link to='/invest'><Card image={invest} servicename='Invest' /></Link>
                <Link to='/billpayments'><Card image={bills} servicename='Bill payments' /></Link>
                <Link to='/upi'><Card image={upi} servicename='Upi' /></Link>
                <Link to='/passbook'><Card image={passbook} servicename='Passbook' /></Link>
                <Link to='/history'><Card image={history} servicename='History' /></Link>
            </div>
        </div>
    );
});

export default Services;
