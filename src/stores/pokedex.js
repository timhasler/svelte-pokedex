export const fetchPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=150';
    const response = await fetch(url);
    const data = await response.json();
    return data.results.map((data, index) => {
        return {
            id: index + 1,
            name: data.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
            }.png`
        }
    });
}