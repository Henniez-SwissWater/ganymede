<script>
    import { afterUpdate } from "svelte";
    import { fly } from 'svelte/transition';
    import { setRandomBorder } from "./utils/brownianBridge.js";
    import { Hamburger } from "svelte-hamburgers";
    import {
        contextMenuLinks,
        contextMenuTitle,
        contexMenuSelection,
    } from "./stores/contextMenuStore";
    const paddingBottom = 15;
    const frayingBottom = 1;
    const steps = 100;
    let open =true;

    afterUpdate(() => {
        const nav = document.getElementById("myContextNavRibbon");
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
        <div id="myContextNavButton">
            <Hamburger bind:open type="arrow-r"/>
        </div>
        {#if open}
            <div id="myContextNavRibbon" transition:fly="{{ x: 100, duration: 2000 }}">
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
    </div>
{/if}

<style>
    #myContextNavRibbon {
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

    #myContextNavButton {
        display: none;
        top: 0;
        left: 80%;
        position: fixed;
        z-index: 1000;
    }

    @media only screen and (max-width: 1000px) {
        #myContextNav {
            right: 0%;
            z-index: 500;
        }

        #myContextNavButton {
            display: block;
        }
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
