<script>
    import Icon from '@iconify/svelte';
    export let miniatures;
</script>

<table class="shadow mx-auto">
    <thead class="bg-blue-100">
    <th class="border px-8 py-4">
        Name
    </th>
    <th class="border w-60 px-8 py-4">
        Progress
    </th>
    <th class="border px-8 py-4">
        Actions
    </th>
    </thead>
    <tbody>
    {#each miniatures as miniature}
        <tr>
            <td class="border px-8 py-4">
                { miniature.name}
            </td>
            <td class="border px-8 py-4">
                <div class="w-full bg-gray-200 rounded-full h-6 mb-4">
                    <div class="bg-{miniature['colour']}-500 h-6 rounded-full" style="width: {miniature.progress}%">
                        <div class="relative align-middle text-center">{ miniature['number_painted'] } / { miniature['count'] }</div>
                    </div>
                </div>
            </td>
            <td class="border px-8 py-4">
                <div class="flex">
                    <form
                            name="info-btn-form"
                            id="info-btn=form"
                            action="/"
                            class="pl-0.5"
                    >
                        <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            <Icon icon="akar-icons:info-fill" />
                        </button>
                    </form>
                    <form
                            name="edit-btn-form"
                            id="edit-btn=form"
                            action="/"
                            class="pl-0.5"
                    >
                        <button type="submit" class="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                            <Icon icon="el:edit" />
                        </button>
                    </form>
                    <form
                            name="delete-btn-form"
                            id="delete-btn=form"
                            action="/"
                            class="pl-0.5"
                    >
                        <button type="submit" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            <Icon icon="ep:delete-filled" />
                        </button>
                    </form>
                </div>
            </td>
        </tr>
    {/each}
    </tbody>
</table>
