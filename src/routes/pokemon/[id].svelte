<script context="module">
    import { transformPokemon } from '../../transformers/pokemon.js'
    
    export async function load({page, fetch}) {
        const id = page.params.id;
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        const pokemon = await transformPokemon(data, id);

        return {
            props: {
                pokemon
            }
        }
    }
</script>

<script>
    import StatCard from '../../components/statCard/StatCard.svelte';
    export let pokemon;
</script>

<div class="space-y-8">
<div class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm flex flex-col items-center">
    <img class="h-40 w-40 " src={pokemon.image} alt={pokemon.name}/>
    <h2 class="uppercase text-2xl">{pokemon.name}</h2>
    <h3 class="uppercase text-1x1">Primary Type: {pokemon.primaryType}</h3>
    <h3 class="uppercase text-1x1">Secondary Type: {pokemon.secondaryType}</h3>
</div>
    <StatCard stats={pokemon.stats}/>
</div>