
import styles from "./WelcomeMessage.module.css"

const WelcomeMessage=({TodoItems})=>{

 return (
  <>
     {TodoItems.length===0  ? <p className={styles.welcome}>Welcome to TodoApp</p>:""}
     
  </>
 )

//  return <p>welcome </p>
}
export default WelcomeMessage