import HeaderTable from "../components/headerTable";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.contactPage}>
      <HeaderTable />

      <h3 className={styles.contactTitle}>Connect with me!</h3>

      <div className={styles.logoContainer}>

        <div className={styles.logo}>
          <Link href="https://www.linkedin.com/in/amarie-drollinger-150866296/?isSelfProfile=true">
            <Image
              src="/images/linkedIn.png"
              width={100}
              height={100}
              alt="LinkedIn"
            />
          </Link>
        </div>

        <div className={styles.logo}>
          <Link href="https://github.com/amariecarysta">
            <Image
              src="/images/github.png"
              width={100}
              height={100}
              alt="GitHub"
            />
          </Link>
        </div>

        <div className={styles.logo}>
          <Link href="mailto:amariecarysta@gmail.com">
            <Image
              src="/images/mail.png"
              width={100}
              height={100}
              alt="Email"
            />
          </Link>
        </div>

      </div>
    </div>
  )
}