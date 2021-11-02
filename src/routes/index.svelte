<script>
    import { pokemon  } from '../stores/pokedex';
    import PokeCard from '../components/pokeCard/PokeCard.svelte';

</script>

<h1 class="text-4xl text-center my-8 uppercase">Welcome to SvelteKit Pokedex</h1>

<div class="grid gap-4 md:grid-cols-2 grid-cols-1">
    {#each $pokemon as pokeman}
        <PokeCard pokeman={pokeman} />
    {/each}
</div>