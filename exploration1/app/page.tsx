import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.myDiv}>
      <h1 className={styles.myHeader}>My Exploration</h1>
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
              <td>Monday</td>
              <td>Web Dev</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>Capstone</td>
            </tr>
          </tbody>

        </table>
      </div>

    </div>
  );
}
