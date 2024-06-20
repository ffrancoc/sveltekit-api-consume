

export async function load() {
    const resp = await fetch("https://rickandmortyapi.com/api/character");
    const data = await resp.json()
    return data;
}