import Usingcards from './usingcards.jsx'
 import Menubar from './Menubar.jsx'
import Services from './Services.jsx'
import personalloan from '../assets/personalloan.png'
import lifeinsurence from '../assets/lifeinsurence.jpeg'
import healthinsurence from '../assets/healthinsurence.jpeg'
import vehicleloan from '../assets/vehicleloan.png'
import autoinsurence from '../assets/autoinsurence.jpeg'
import { useEffect } from 'react'
import Footer from './Footer.jsx'
function Insurence(){
          useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
    return(
        <>
        <Menubar/>
        <div className='featurespage'>
        <div className='featurescontainer'>
        <Usingcards image={autoinsurence}message={'Vehicle Insurence'}/>
        <Usingcards image={lifeinsurence}message={'Life insurence'}/>
        <Usingcards image={healthinsurence}message={'Health insurence'}/>
        <Usingcards image={vehicleloan}message={'Vehicle loan'}/>
        </div>
        <div className='cotationconatiner'>
            <h1 className='cotationcontent lineanimation fallanimation'>Financial Security Starts with the Right Insurance Plan. Get Yours Now!</h1>
            </div>
        </div>
        <Services/>
        <Footer/>
        </>
    )
}
export default Insurence