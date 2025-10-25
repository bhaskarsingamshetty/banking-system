import { useNavigate } from 'react-router-dom';

function Menubar(){
    const navigate = useNavigate();
    return(
    <div className="menubar" >
        <span onClick={() => navigate("/Upi")}>UPI</span>
        <span onClick={() => navigate("/loan")}>Loan</span>
        <span onClick={() => navigate("/Invest")}>Invest</span>
        <span>Query</span>
    </div>
    )
}
export default Menubar