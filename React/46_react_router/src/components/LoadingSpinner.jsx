const LoadingSpinner=()=>{
  return (
    <center className="center">
     <div className="spinner-border text-secondary" style={ {width: "3rem" , height: "3rem"}} role="status">
     <span className="visually-hidden">Loading...</span>
     </div>
    </center>
        
  )
}
export default LoadingSpinner