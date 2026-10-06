import Link from "next/link"
import styles from "./headerTable.module.css"

export default function HeaderTable(){
    return(

      <table className={styles.table}>
        <tbody>
          <tr>
            <td> <Link href="/">Home </Link> </td>
            <td> <Link href="/projects">Projects </Link> </td>
            <td> <Link href="/contact">Contact</Link></td>
          </tr>
        </tbody>
      </table>
    )


}