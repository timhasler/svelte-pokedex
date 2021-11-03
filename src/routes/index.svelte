<script>
    import { pokemon  } from '../stores/pokedex';
    import PokeCard from '../components/pokeCard/PokeCard.svelte';

</script>

<h1 class="text-4xl text-center my-8 uppercase">Welcome to SvelteKit Pokedex</h1>
<input class="rounded-md w-full text-lg p-4 border-2
    border-gray-200" type="text" placeholder="Search for Pokemon">
<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
    {#each $pokemon as pokeman}
        <PokeCard pokeman={pokeman} />
    {/each}
</div>