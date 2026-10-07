export type MtgCard = {
    name: string,
    image: string,
    manaCost: string,
    CMC: number,
    oracleText: string,
    flavorText: string,
    
}


export function mapMtgCard(data: any): MtgCard{
    return{
        name: data.name,
        image: data.image_uris.large,
        manaCost: data.mana_cost,
        CMC: data.cnc,
        oracleText: data.oracle_text,
        flavorText: data.flavor_text
    }
}