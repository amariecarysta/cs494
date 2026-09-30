export default function ScheduleTableHead(props: { days: string[] }) {
    return (
        <thead>
            <tr>
                <td>Time</td>
                {props.days.map((day, i) => (
                    <th key={i}>{day}</th>
                ))}
            </tr>

        </thead>

    )

}