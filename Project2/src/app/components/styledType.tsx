import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"

const typeColors: Record<string, string> = {
    normal: "#A0A29F",
    fire: "#FBA54C",
    water: "#539DDF",
    electric: "#F2D94E",
    grass: "#5FBD58",
    ice: "#75D0C1",
    fighting: "#D3425F",
    poison: "#B763CF",
    ground: "#DA7C4D",
    flying: "#A1BBEC",
    psychic: "#FA8581",
    bug: "#92BC2C",
    rock: "#C9BB8A",
    ghost: "#5F6DBC",
    dragon: "#0C69C8",
    dark: "#595761",
    steel: "#5695A3",
    fairy: "#EE90E6",
}

const StyledType = styled(Box, {
    shouldForwardProp: (prop) => prop !== "pokemonType",
})<{ pokemonType: string }>(({ pokemonType }) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    margin: "3px",
    cursor: "pointer",
    transition: "200ms all",

    backgroundColor: typeColors[pokemonType],
    boxShadow: `0 0 8px ${typeColors[pokemonType]}`,

    "&:hover": {
        filter: "saturate(200%)",
        transform: "scale(1.1)",
    }
}))

export default StyledType