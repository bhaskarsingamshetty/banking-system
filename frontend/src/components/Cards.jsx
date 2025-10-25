import Menubar from './Menubar.jsx'
import creditcard from '../assets/creditcard.jpeg'
import debitcard from '../assets/debitcard.png'
import prepaidcard from '../assets/prepaidcard.png'
import Usingcards from './usingcards.jsx'
import Services from './Services.jsx'
import { useEffect } from 'react'
import Footer from './Footer.jsx'

function Cards(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return( 
        <>
        <Menubar/>
        <div className="featurespage">
            <div className='featurescontainer'>
            <Usingcards image={creditcard}message={'Credit Card\'s'}/>
            <Usingcards image={debitcard}message={'Debit Card\'s'}/>
            <Usingcards image={prepaidcard}message={'Prepaid Card\'s'}/>
            </div>
            <div className='cotationconatiner'>
            <h1 className='cotationcontent lineanimation fallanimation'>Swipe, tap, and go—banking made effortless with our feature-rich cards!</h1>
            </div>
        </div>
        <Services/>
        <Footer/> 
        </>
    )
}
export default Cards