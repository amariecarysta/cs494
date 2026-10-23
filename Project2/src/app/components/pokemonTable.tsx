'use client'

import { TableContainer, Table, TableHead, TableBody } from "@mui/material"

import StyledTableRow from "../components/styledTableRow"
import StyledTableCell from "../components/styledTableCell"
import StyledAbility from "../components/styledAbility"

import { Pokemon } from "../types/pokemon";

import Image from "next/image";

import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

import { useState, useEffect } from "react"

import StyledType from "../components/styledType"


export default function PokemonTable(props: { Pokemon: Pokemon[] }) {

    const [modifiedArray, setModifiedArray] = useState<Pokemon[]>(props.Pokemon)

    const [filteredAbilities, setFilteredAbilities] = useState<string[]>([])

    const [ascending, setAscending] = useState<boolean>(true)

    const [filteredTypes, setFilteredTypes] = useState<string[]>([])

    const [shiny, setShiny] = useState<boolean>(false)



    useEffect(() => {
        let tmpArray = props.Pokemon

        for (let i = 0; i < filteredTypes.length; i++) {
            tmpArray = tmpArray.filter((pokemon) => pokemon.types.includes(filteredTypes[i]))
        }

        for (let i = 0; i < filteredAbilities.length; i++) {
            tmpArray = tmpArray.filter((pokemon) => pokemon.abilities.includes(filteredAbilities[i]))
        }

        setModifiedArray([...tmpArray])

    }, [filteredTypes, filteredAbilities, props.Pokemon])



    function addAbilityFilter(filter: string) {
        if (!filteredAbilities.includes(filter)) {
            setFilteredAbilities([...filteredAbilities, filter])
        }
    }

    function deleteAbilityFilter(filter: string) {
        setFilteredAbilities([...filteredAbilities.filter(x => x != filter)])
    }

    function getElementFromAbility(ability: string, i: number, add: boolean) {
        return <StyledAbility
            key={i}
            label={ability}
            onClick={() => { add ? addAbilityFilter(ability) : deleteAbilityFilter(ability) }}
        />
    }

    function addTypeFilter(filter: string) {
        if (!filteredTypes.includes(filter)) {
            setFilteredTypes([...filteredTypes, filter])
        }
    }
    
    function deleteTypeFilter(filter: string) {
        setFilteredTypes([...filteredTypes.filter(x => x != filter)])
    }

    function getElementFromType(type: string, i: number, add: boolean) {
        if (["normal", "fire", "water", "electric", "grass", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"].includes(type)) {
            return (
                <StyledType
                    key={i} 
                    pokemonType={type}
                    onClick={() => { add ? addTypeFilter(type) : deleteTypeFilter(type) }}>
                    <Image
                        alt={type}
                        width={20}
                        height={20}
                        src={`/images/${type}.svg`}
                    />
                </StyledType>
            )
        }

        else {
            return <span key={i}>{type}</span>
        }
    }





    function sort(col: "id" | "name" | "hp" | "attack" | "defense" | "special-attack" | "special-defense" | "speed" | "height" | "weight") {


        if (col == "name") {
            // string sort
            setModifiedArray([...modifiedArray].sort((a: Pokemon, b: Pokemon) => ascending ? (a[col] ?? "").localeCompare(b[col] ?? "") : (b[col] ?? "").localeCompare(a[col] ?? "")))
        }
        else if (col == "height") {
            // sorting height
            setModifiedArray([...modifiedArray].sort((a: Pokemon, b: Pokemon) => ascending ? a.height.meters - b.height.meters : b.height.meters - a.height.meters))
        }
        else if (col == "weight") {
            // sorting weight
            setModifiedArray([...modifiedArray].sort((a: Pokemon, b: Pokemon) => ascending ? a.weight.kilograms - b.weight.kilograms : b.weight.kilograms - a.weight.kilograms))
        }
        else if (col == "id") {
            // sorting ID
            setModifiedArray([...modifiedArray].sort((a: Pokemon, b: Pokemon) => ascending ? a.id - b.id : b.id - a.id))
        }
        else {
            // sorting stats
            setModifiedArray([...modifiedArray].sort((a: Pokemon, b: Pokemon) => ascending ? a.stats[col] - b.stats[col] : b.stats[col] - a.stats[col]))
        }

        setAscending(!ascending)
    }

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell>No. <UnfoldMoreIcon sx={{ verticalAlign: "middle", cursor: "pointer" }} onClick={() => { sort("id") }} /></StyledTableCell>
                        <StyledTableCell>Name <UnfoldMoreIcon sx={{ verticalAlign: "middle", cursor: "pointer" }} onClick={() => { sort("name") }} /></StyledTableCell>
                        <StyledTableCell
                            onClick={() => setShiny(!shiny)} sx={{ cursor: "pointer" }}>
                            Image
                        </StyledTableCell>
                        <StyledTableCell>Types {filteredTypes.map((filter, i) => getElementFromType(filter, i, false))}</StyledTableCell>
                        <StyledTableCell>Abilities {filteredAbilities.map((filter, i) => getElementFromAbility(filter, i, false))}</StyledTableCell>
                        <StyledTableCell>HP <UnfoldMoreIcon sx={{ verticalAlign: "middle", cursor: "pointer" }} onClick={() => { sort("hp") }} /></StyledTableCell>
                        <StyledTableCell>Attack <UnfoldMoreIcon sx={{ verticalAlign: "middle", cursor: "pointer" }} onClick={() => { sort("attack") }} /></StyledTableCell>
                        <StyledTableCell>Defense <UnfoldMoreIcon sx={{ verticalAlign: "middle", cursor: "pointer" }} onClick={() => { sort("defense") }} /></StyledTableCell>
                        <StyledTableCell>Sp. Atk <UnfoldMoreIcon sx={{ verticalAlign: "middle", cursor: "pointer" }} onClick={() => { sort("special-attack") }} /></StyledTableCell>
                        <StyledTableCell>Sp. Def <UnfoldMoreIcon sx={{ verticalAlign: "middle", cursor: "pointer" }} onClick={() => { sort("special-defense") }} /></StyledTableCell>
                        <StyledTableCell>Speed <UnfoldMoreIcon sx={{ verticalAlign: "middle", cursor: "pointer" }} onClick={() => { sort("speed") }} /></StyledTableCell>
                        <StyledTableCell>Height (m) <UnfoldMoreIcon sx={{ verticalAlign: "middle", cursor: "pointer" }} onClick={() => { sort("height") }} /></StyledTableCell>
                        <StyledTableCell>Weight (kg) <UnfoldMoreIcon sx={{ verticalAlign: "middle", cursor: "pointer" }} onClick={() => { sort("weight") }} /></StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {
                        modifiedArray.map((pokemon, i) => (
                            <StyledTableRow key={i}>
                                <StyledTableCell>{pokemon.id}</StyledTableCell>
                                <StyledTableCell>{pokemon.name}</StyledTableCell>
                                <StyledTableCell><Image alt={pokemon.name} width={100} height={100} src={shiny ? pokemon.shiny_image : pokemon.image} unoptimized /></StyledTableCell>
                                <StyledTableCell>{pokemon.types.map((type, i) => getElementFromType(type, i, true))}</StyledTableCell>
                                <StyledTableCell>{pokemon.abilities.map((ability, i) => getElementFromAbility(ability, i, true))}</StyledTableCell>
                                <StyledTableCell>{pokemon.stats.hp}</StyledTableCell>
                                <StyledTableCell>{pokemon.stats.attack}</StyledTableCell>
                                <StyledTableCell>{pokemon.stats.defense}</StyledTableCell>
                                <StyledTableCell>{pokemon.stats["special-attack"]}</StyledTableCell>
                                <StyledTableCell>{pokemon.stats["special-defense"]}</StyledTableCell>
                                <StyledTableCell>{pokemon.stats.speed}</StyledTableCell>
                                <StyledTableCell>{pokemon.height.meters}</StyledTableCell>
                                <StyledTableCell>{pokemon.weight.kilograms}</StyledTableCell>
                            </StyledTableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}
