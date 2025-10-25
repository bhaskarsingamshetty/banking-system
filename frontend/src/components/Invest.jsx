import Usingcards from './usingcards.jsx'
 import Menubar from './Menubar.jsx'
import Services from './Services.jsx'
import sip from '../assets/sip.jpg'
import ipo from '../assets/ipo.png'
import mutualfunds from '../assets/mutualfunds.jpeg'
import { useEffect } from 'react'
import Footer from './Footer.jsx'
function Invest(){
          useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
    return(
        <>
        <Menubar/>
        <div className='featurespage'>
        <div className='featurescontainer'>
        <Usingcards image={mutualfunds}message={'Mutual Fund'}/>
        <Usingcards image={ipo}message={'IPO'}/>
        <Usingcards image={sip}message={'SIP'}/>
        </div>
        <div className='cotationconatiner'>
            <h1 className='cotationcontent lineanimation fallanimation'>Your Financial Freedom Starts with the Right Investment Choices!</h1>
            </div>
        </div>
        <Services/>
        <Footer/>
        </>
    )
}
export default Invest