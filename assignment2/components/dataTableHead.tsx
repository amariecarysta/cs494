import { TableHead, TableRow, TableCell } from "@mui/material";

import { StyledTableHeadRow } from "./styledComponents";

export default function DataTableHead() {
    return (
        <TableHead>
            <StyledTableHeadRow>
                <TableCell>Name</TableCell>
                <TableCell>Life Expectancy</TableCell>
                <TableCell>Shedding: 1 is least amount</TableCell>
            </StyledTableHeadRow>
        </TableHead>
    )
}