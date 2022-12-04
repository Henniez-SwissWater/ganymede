<script>
    export let title;
    export let credit;
    export let resources;
</script>

<p>
    <strong>{title}</strong><br />
    {#if credit} {credit} <br />
    {/if}
    [{@html resources}]
</p>

<style>
    p {
        margin-bottom: 0.8em;
    }
</style>