<script>
    import Navbar from '../components/navBar/Navbar.svelte'
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