import styles from "./page.module.css"
import HeaderTable from "./components/headerTable"
import Image from "next/image"

export default function Home() {


  function greet(name: string) {
    return `Welcome to my ${name}`
  }



  return (
    <div className={styles.myDiv}>
      <HeaderTable />
      <h1 className={styles.myHeader}>{greet("portfolio!")}</h1>

      <div className={styles.profileSection}>
        <Image
          className={styles.profileImage}
          src="/images/profile.jpeg"
          width={500}
          height={500}
          alt="Profile Picture"
        />
        <div className={styles.about}>

          <h2>Hello, I'm Amarie</h2>

          <p>

            Family comes first, then everything else second!
            I'm a Computer Science student at Oregon State University
            with a focus on software engineering. I don't love to code, but I do love playing with data! I also enjoy building websites and computer graphics.

          </p>

          <p>

            Outside of school, I work in IT, I'm a wife to a very hard working and amazing husband. I homeschool one of my kids, public school for the other one. I have two french bulldogs, Biggie and Gigi. I love to camp, snowboard, a good joke, reading fantasy books, and hosting game nights with my family!

          </p>

          <p>

            "I've got wood for sheep." - Settlers of Catan

          </p>

        </div>
      </div>
    </div>

  )

}


