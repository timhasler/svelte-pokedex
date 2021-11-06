export const transformPokemon = async (rawData, id) => {
    const stats = rawData.stats.map((rawStat) => {
        return {
            name: rawStat.stat.name,
            value: rawStat.base_stat,
        }
    });

    const types = rawData.types.map((type) => {
        return type.type.name;
    })

    return {
        id: id,
        name: rawData.name,
        primaryType: types[0],
        secondaryType: types[1],
        image: rawData.sprites.other.dream_world.front_default,
        stats: stats
    }
}