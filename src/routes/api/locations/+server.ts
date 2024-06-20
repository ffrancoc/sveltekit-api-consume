
export async function GET(response: object) {        

    const page: number = Number(response.url.searchParams.get("page") ?? 1);

    const resp = await fetch(`https://rickandmortyapi.com/api/location?page=${page}`);
    const data = await resp.json();

    const headers = new Headers();
    headers.append("Content-Type", "application/json")

    return new Response(
        JSON.stringify(data), 
        {
            'status': 200, 
            'headers': headers            
        });
}