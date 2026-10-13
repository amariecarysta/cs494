'use client'

import { Dog } from "./../types/dog"
import DataTableBody from "./../components/dataTableBody"
import DataTableHead from "./../components/dataTableHead"
import { TableContainer, Table } from "@mui/material"

import { useEffect, useState } from "react";

export default function DataTable(props: { data: Dog[] }) {

    const copyData = JSON.parse(JSON.stringify(props.data))
    sortByString(copyData, "name")
    console.log(copyData)

    function sortByString(data: Dog[], property: "name"): undefined {
        return data.sort((a: Dog, b: Dog) => {
            const nameA = a[property].toUpperCase()
            const nameB = b[property].toUpperCase()

            if (nameA < nameB) return -1
            else if (nameA > nameB) return 1


            return 0

        })
    }



  return (
    <main>
      <TableContainer>
        <Table>
          <DataTableHead />
          <DataTableBody data={copyData} />
        </Table>
      </TableContainer>
    </main>
  )
}