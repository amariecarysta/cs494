import { Typography, TableContainer, Table } from "@mui/material"

import { Dog } from "../../types/dog"
import DataTableBody from "../../components/dataTableBody"
import DataTableHead from "../../components/dataTableHead"

export default async function Home() {

  const url = "https://api.api-ninjas.com/v1/dogs?max_height=12"
  const response = await fetch(url, {headers: {'X-Api-Key' : process.env.API_NINJA_KEY ?? "" }})
  const data: Dog[] = await response.json()

  return (
    <main>
      <Typography sx={{ m: 2, p: 3}} variant="h4">
        Here's a cool table about dogs that are 12 inches tall or smaller!
      </Typography>
      <TableContainer>
        <Table>
          <DataTableHead />
          <DataTableBody data={data}/>
        </Table>
      </TableContainer>
    </main>
  );
}