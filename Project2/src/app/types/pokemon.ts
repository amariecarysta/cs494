export type Pokemon = {
    id: number
    name: string

    height: {
        meters: number
        inches: number
    }

    weight: {
        kilograms: number
        pounds: number
    }

    types: string[]
    abilities: string[]

    image: string
    shiny_image: string

    stats: {
        hp: number
        attack: number
        defense: number
        "special-attack": number
        "special-defense": number
        speed: number
    }
}

export function mapPokemon(data: Pokemon): Pokemon {
    return {
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        types: data.types,
        abilities: data.abilities,
        image: data.image,
        shiny_image: data.shiny_image,
        stats: data.stats
    }
}