'use client'

import { TableRow } from "@mui/material"
import { styled } from "@mui/system"

const StyledTableRow = styled(TableRow)({
    "&:nth-of-type(odd)": {
        backgroundColor: "#FFF8E7",
    },

    "&:nth-of-type(even)": {
        backgroundColor: "#FFE8A3",
    },

    "&:hover": {
        backgroundColor: "#FFD54F",
    },
})

export default StyledTableRow;