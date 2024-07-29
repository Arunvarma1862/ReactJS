function Hello(){
    let names="virat"
    let number=25633
    const fullName=()=>{
        return "Virat Kohil"
    }
    return <h1>
        Hello this id future speaking.{number} I am name is {names} {fullName()}
    </h1>
}

export default Hello