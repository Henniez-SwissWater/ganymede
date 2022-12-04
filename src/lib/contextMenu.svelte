<script>
    import { afterUpdate } from "svelte";
    import { setRandomBorder } from "./utils/brownianBridge.js";
    import { contextMenuLinks, contextMenuTitle, contexMenuSelection } from "./stores/contextMenuStore";
    const paddingBottom = 15;
    const frayingBottom = 1;
    const steps = 100;

    afterUpdate(() => {
        const nav = document.getElementById("myContextNav");
        const content = document.getElementById("contextNavContent");
        if (nav && content) {
            setRandomBorder(
                nav,
                content,
                "--ribbon",
                steps,
                paddingBottom,
                frayingBottom
            );
        }
    });
</script>

{#if $contextMenuLinks.length > 0}
    <div id="myContextNav">
        <div id="contextNavContent">
            <span>{$contextMenuTitle}</span>
            {#each $contextMenuLinks as { label, link }, i}
                {#if $contexMenuSelection == label}
                    <a href={link} id="contextMenuSelection">{label}</a>
                {:else}
                    <a href={link}>{label}</a>
                {/if}
            {/each}
        </div>
    </div>
{/if}

<style>
    #myContextNav {
        position: fixed;
        top: 0;
        left: 80%;
        margin-left: 1em;
        
        padding: 1em;
        height: 100%;
        background-color: dimgray;

        color: black;
        clip-path: var(--ribbon);

        overflow-y: auto;
    }

    a {
        display: block;
        padding-top: 0.1em;
        padding-bottom: 0.1em;
        font-size: 0.8em;
        transition: all 0.2s ease-in-out;
    }

    a#contextMenuSelection {
        color: whitesmoke;
    }

    a:hover {
        color: whitesmoke;
    }
</style>
