export type MtgCard = {
    name: string,
    image: string,
    manaCost: string[],
    CMC: number,
    oracleText: string,
    flavorText: string,
    
}


export function mapMtgCard(data: any): MtgCard{
    return{
        name: data.name,
        image: data.image_uris.large ?? "",
        manaCost: getManaCost(data.mana_cost),
        CMC: data.cmc,
        oracleText: data.oracle_text,
        flavorText: data.flavor_text
    }
}

function getManaCost(rawCost: string): string[]{
    const regex = /\{.*?}/g
    return rawCost.match(regex) ?? []
}