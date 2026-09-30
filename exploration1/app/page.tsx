import styles from "./page.module.css";

export default function Home() {

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturady"]

  function greet(name: string){
    return `Hello, ${name}`
  }

  const daysAndActivities = [
    {
      day: "Sunday",
      activity: "Relax"
    },
    {
      day: "Monday",
      activity : "WebDev"
    },
    {
      day: "Tuesday",
      activity: "Capstone"
    },
    {
      day: "Wednesday",
      activity: "Class"
    },
    {
      day: "Thursday",
      activity: "Work"
    }
  ]


  return (
    <div className={styles.myDiv}>
      <h1 className={styles.myHeader}>{greet("Amarie")}</h1>
      <div>
        <h3>My favorite video games</h3>
        <ul>
          <li> Zelda: Breath of the Wild</li>
          <li> Super Mario 3</li>
          <li> Reanimal</li>
          <li> Super Mario 64</li>
        </ul>
      </div>
      <div>
        <h3>My Schedule</h3>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Activity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{daysAndActivities[1].day}</td>
              <td>{daysAndActivities[1].activity}</td>
            </tr>
            <tr>
              <td>{daysAndActivities[2].day}</td>
              <td>{daysAndActivities[2].activity}</td>
            </tr>
          </tbody>

        </table>
      </div>
      <div>
        <p>PI = {Math.PI}</p>
        <p>2PI = {Math.PI * 2}</p>
      </div>

    </div>
  );
}
