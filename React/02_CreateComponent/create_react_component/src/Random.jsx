

const Random=()=>{

    let random= Math.random()*100
    return (

        <h1 style={{backgroundColor:"blue"}}>
            Random Number is {Math.round(random)}
        </h1>

    )
}
export default Random



// function Random() {
//   let random = Math.random() * 100;
//   return (
//     <h1 style={{ backgroundColor: "#778889" }}>
//       Random number is :{Math.round(random)}
//     </h1>
//   );
// }

// export default Random;
