function Todoitem2(){
     let todoName="Go to college";
    let todoDate="5/4/2024"
    return (
        
<div className="container ">
      
      <div className="row kg-row">
        <div className="col-6">
         {todoName}
        </div>
        <div className="col-4">
          {todoDate}
        </div>
        <div className="col-2 ">
        <button type="button" className="btn btn-danger kg-button">Delete</button>
        </div>
      </div>
    </div>
    )
}
export default Todoitem2