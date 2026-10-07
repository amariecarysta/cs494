'use client'

import { TableBody, TableCell, TableRow } from "@mui/material";
import { Dog } from "../types/dog";
import { StyledTableRow } from "./styledComponents";

export default function DataTableBody( props: { data: Dog[] }) {
    return (
        <TableBody>
            {
                props.data.map((dog: Dog, i: number) => (
                    <StyledTableRow key={i}>
                        <TableCell>{dog.name}</TableCell>
                        <TableCell>{dog.max_life_expectancy}</TableCell>
                        <TableCell>{dog.shedding}</TableCell>
                    </StyledTableRow>
                ))
            }
        </TableBody>
    )
}