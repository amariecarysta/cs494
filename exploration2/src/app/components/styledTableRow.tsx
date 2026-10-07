'use client';

import { TableRow } from "@mui/material";
import { styled } from "@mui/system";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: 'pink',
    },
    '&:nth-of-type(even)': {
        backgroundColor: '#ffffff',
    },
}));

export default StyledTableRow;