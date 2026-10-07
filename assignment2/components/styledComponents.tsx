'use client'

import { TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTableRow = styled(TableRow)({

    "&:nth-of-type(odd)": {
        "& .MuiTableCell-root": {
            backgroundColor: "#FFF4E6"
        }
    },

    "&:nth-of-type(even)": {
        "& .MuiTableCell-root": {
            backgroundColor: "#FFFFFF"
        }
    },

    "& .MuiTableCell-root": {
        padding: "14px",
        fontSize: "16px",
        borderBottom: "1px solid #E0C9A6"
    },

    "&:hover .MuiTableCell-root": {
        backgroundColor: "#FFE0B2",
        transition: "0.2s"
    }
})


export const StyledTableHeadRow = styled(TableRow)({

    "& .MuiTableCell-root": {
        backgroundColor: "#5D4037",
        color: "white",
        fontWeight: "bold",
        fontSize: "17px",
        padding: "16px",
        borderBottom: "3px solid #FFB74D"
    }
})