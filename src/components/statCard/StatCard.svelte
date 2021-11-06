<script>
    import Stat from './Stat.svelte';
    export let stats;
</script>

<div class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm flex flex-col items-center">
    <h2 class="uppercase text-2xl">Stats</h2>
    <div class="justify-center py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
        {#each stats as stat }
            <Stat stat={stat} />
        {/each}
    </div>
</div>