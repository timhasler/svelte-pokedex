export const transformPokemon = async (rawData, id) => {
    const stats = rawData.stats.map((rawStat) => {
        return {
            name: rawStat.stat.name,
            value: rawStat.base_stat,
        }
    });

    return {
        id: id,
        name: rawData.species.name,
        image: rawData.sprites.other.dream_world.front_default,
        stats: stats
    }
}