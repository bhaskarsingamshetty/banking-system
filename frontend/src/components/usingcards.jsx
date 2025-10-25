function Usingcards({image,message}){
    return(
        <div className="loancard fallanimation">
            <img className="loancardsimage"src={image} alt="personal loan" />
            <p className="loancardpara">{message}</p>
        </div>
    )
}
export default Usingcards