<script context="module">

    export async function load({ fetch }) {
        const url = `http://localhost/api/1/miniatures`;
        const res = await fetch(url);
        const data = await res.json();
        const miniatures = data;

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