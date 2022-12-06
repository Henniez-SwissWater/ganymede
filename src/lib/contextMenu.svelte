<script>
    import { afterUpdate } from "svelte";
    import { tweened } from "svelte/motion";
    import { cubicOut } from "svelte/easing";
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
    let open = false;
    let links;
    let refresh = true;

    contextMenuLinks.subscribe((l) => {
        refresh = !links || links == l;
        links = l;
    });

    afterUpdate(() => {
        if (true) {
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
        }
    });

    const arrowRotation = tweened(1, {
        duration: 300,
        easing: cubicOut,
    });

    function handleBurgerClick() {
        $arrowRotation = open ? 0 : -90;
    }

    const menuMovement = tweened(0, {
        duration: 300,
        easing: cubicOut,
    });

    $: $menuMovement = open ? 4.1 : -40;
</script>

{#if $contextMenuLinks.length > 0}
    <div id="myContextNavButton" style="transform: rotate({$arrowRotation}deg)">
        <Hamburger bind:open on:click={handleBurgerClick} type="arrow-r" />
    </div>

    <div id="myContextNav" >
        <div id="myContextNavRibbon" style="--menuPosition: {$menuMovement}em">
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

        width: fit-content;
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

    #myContextNavButton {
        display: none;
        position: fixed;
        top: 0;
        right: 5%;
        z-index: 1000;
    }

    @media only screen and (max-width: 1000px) {
        #myContextNavButton {
            display: block;
        }

        #myContextNavRibbon {
            right: 95%;
            transform: translate(0, var(--menuPosition));
            margin-left: 0em;
        }
    }
</style>
