import style from "./page.module.css";
import HeaderTable from "../components/headerTable";

export default function Home() {

  const projects = [
    {
      name: "Waste Management Information System",
      description: "A database-driven application I built to manage waste management operations. The system allows users to create, view, update, and delete records for customers, services, and other operational data through an organized user interface."
    },
    {
      name: "Fan-Made Regular Show Game",
      description: "A fan-made game inspired by Regular Show that I built using MakeCode Arcade. The game includes interactive gameplay, scoring, character movement, and AI-based elements while incorporating characters and themes from the show."
    },
    {
      name: "Household Chore Tracker",
      description: "A family chore management website I built using React and microservices. It allows household members to assign and complete chores, create recurring tasks, earn points, receive reminders, and track progress."
    }
  ];

  return (
    <div className={style.projectsPage}>
      <HeaderTable />

      <h3 className={style.projectTitle}>Projects</h3>

      <table className={style.projectTable}>
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{projects[0].name}</td>
            <td>{projects[0].description}</td>
          </tr>

          <tr>
            <td>{projects[1].name}</td>
            <td>{projects[1].description}</td>
          </tr>

          <tr>
            <td>{projects[2].name}</td>
            <td>{projects[2].description}</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}
