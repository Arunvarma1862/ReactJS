function Random(){

    let random = Math.random()*100
    return <h1 style={{backgroundColor:"#778889"}}>
        Random number is :{Math.round(random)}
    </h1>
}

export default Random;