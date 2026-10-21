import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest){
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get("word") ?? ""

    const definitions = await getDefinitions(query)

    return Response.json({ definitions: definitions })
}

// process.env.API_KEY_DICTIONARY
// process.env.API_KEY_THESAURUS


async function getDefinitions(word: string){
    const url = `https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.API_KEY_DICTIONARY}`

    const response = await fetch(url)
    const data = await response.json()

    return data.map((datum: any)=>datum.shortdef)
}