import { TableContainer, Table, TableHead, TableBody } from "@mui/material"

import StyledTableRow from "../components/styledTableRow"
import StyledTableCell from "../components/styledTableCell"

import { MtgCard } from "../types/mtgCard";

import Image from "next/image";

import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

import { useState } from "react"


export default function MtgTable(props: { cards: MtgCard[]}) {

    const [sortedCards, setSortedCards] = useState<MtgCard[]>(props.cards)

    function sort(col: "CMC"){
        if (col == "CMC"){
            setSortedCards([...sortedCards].sort((a: MtgCard, b: MtgCard)=> a[col] - b[col]))
        }
    }

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell>Image</StyledTableCell>
                        <StyledTableCell>ManaCost</StyledTableCell>
                        <StyledTableCell width={60}>CMC <UnfoldMoreIcon sx={{ verticalAlign: "middle" }} onClick={()=>{sort("CMC")}} />
                        </StyledTableCell>
                        <StyledTableCell>Oracle Text</StyledTableCell>
                        <StyledTableCell>Flavor Text</StyledTableCell>


                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {
                        sortedCards.map((card, i) => (
                            <StyledTableRow key={i}>
                                <StyledTableCell>{card.name}</StyledTableCell>
                                <StyledTableCell><Image alt={card.name} width={50} height={70} src={card.image} unoptimized />
                                </StyledTableCell>
                                <StyledTableCell>{card.manaCost.map((cost, i) =>
                                    getElementFromCost(cost, i)
                                )}</StyledTableCell>
                                <StyledTableCell>{card.CMC}</StyledTableCell>
                                <StyledTableCell>{card.oracleText}</StyledTableCell>
                                <StyledTableCell>{card.flavorText}</StyledTableCell>
                            </StyledTableRow>

                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

function getElementFromCost(cost: string, i: number) {
    if (["{W}", "{B}", "{U}", "{R}", "{G}"].includes(cost)) {
        return <Image key={i} style={{ verticalAlign: "middle" }} alt={cost} width={20} height={20} src={`/images/${cost.slice(1, -1)}.svg`} />
    }

    else {
        return <span key={i}>{cost}</span>
    }
}