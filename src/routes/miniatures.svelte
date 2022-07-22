<script context="module">

    export async function load({ fetch }) {
        const url = `http://52.56.131.239/api/1/miniatures`;
        const res = await fetch(url);
        const miniatures = await res.json();

        return {
            props: {
                miniatures
            }
        }
    }

</script>

<script>
    import MiniatureTable from "../components/miniatureTable/MiniatureTable.svelte";
    export let miniatures = [];
    $: {
    }
</script>

<h1 class="text-4xl text-center my-8 uppercase">Welcome to SvelteKit Miniatures</h1>
<div class="py-4 ">
        <MiniatureTable miniatures="{miniatures}" />
</div>