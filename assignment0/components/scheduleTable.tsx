import ScheduleTableHead from "./scheduleTableHead"
import ScheduleTableBody from "./scheduleTableBody"

export default function ScheduleTable(props: { style: string, days: string[], schedule: { [time: string]: string[] } }) {
    return <table className={props.style}>
        <ScheduleTableHead days={props.days} />
        <ScheduleTableBody schedule={props.schedule} />

    </table>

}