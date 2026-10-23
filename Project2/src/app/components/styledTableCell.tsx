'use client'

import { TableCell, tableCellClasses } from '@mui/material';
import { styled } from '@mui/system';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#D93636',
        color: '#FFF8E7',
        fontWeight: 'bold',
        borderBottom: '8px solid #2B2B2B',
        padding: '18px 12px',
    },

    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        padding: '12px',
        color: '#2B2B2B',
        borderBottom: '2px solid #2B2B2B',
    },
}))

export default StyledTableCell;