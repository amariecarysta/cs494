import styles from "./page.module.css";

import HeaderTable from "./components/headerTable";

export default function Home() {


  function greet(name: string){
    return `Welcome, ${name}`
  }



  return (
    <div className={styles.myDiv}>
      <HeaderTable />
      <h1 className={styles.myHeader}>{greet("Amarie")}</h1>
    </div>
  );
}
