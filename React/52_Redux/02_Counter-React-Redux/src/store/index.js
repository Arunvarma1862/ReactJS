import {createStore}  from "redux";


const INITIAL_VALUE={
  counter:5,
  privacy:false
}

const counterReducer=(store=INITIAL_VALUE,action)=>{
    let newStore=store;
    if(action.type ==="INCREMENT"){
       newStore= {...store,counter:store.counter+1}
      // return {counter:store.counter+1}
    }
    else if(action.type ==="DECREMENT"){
      newStore= {...store,counter:store.counter-1}
      // return {counter:store.counter-1}
    }
    else if(action.type ==="ADD"){
      newStore= {...store,counter:store.counter + Number.parseInt(action.payload.num1)}
      // return {counter:store.counter-1}
    }
    else if(action.type ==="SUB"){
      newStore= {...store,counter:store.counter - Number.parseInt(action.payload.num2)}
    }
    else if(action.type ==="PRIVACY_TOGGLE"){
      newStore= {...store,privacy:!store.privacy}
    }
    return newStore
    // return store
}


const counterStore=createStore(counterReducer);

export default counterStore;
