<script>
    import Navbar from '$lib/components/navBar/Navbar.svelte'
    export const prerender = true;
</script>
<svelte:head>
    <title>Svelte Kit Pokedex</title>
</svelte:head>

<div class="p-8 max-w-6xl mx-auto">
    <Navbar />
    <slot></slot>
</div>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>