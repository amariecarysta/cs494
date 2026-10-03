import styles from "./page.module.css";

export default function Home() {


  function greet(name: string){
    return `Welcome, ${name}`
  }



  return (
    <div className={styles.myDiv}>
      <h1 className={styles.myHeader}>{greet("Amarie")}</h1>
    </div>
  );
}
