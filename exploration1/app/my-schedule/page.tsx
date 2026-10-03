import style from "./page.module.css";
import HeaderTable from "../components/headerTable";

export default function Home() {

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturady"]


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
    <div>
      <HeaderTable />
        <h3>My Schedule</h3>
        <table className= {style.scheduleTable}>
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
  );
}
