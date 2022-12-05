<script>
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import { setRandomBorder } from "./utils/brownianBridge.js";
    import { Hamburger } from "svelte-hamburgers";
    const paddingBottom = 5;
    const frayingBottom = 3;
    const steps = 100;
    let open = true;

    onMount(() => {
        setRandomBorder(
            document.getElementById("myNav"),
            document.getElementById("navContent"),
            "--ribbon",
            steps,
            paddingBottom,
            frayingBottom
        );
    });
</script>

<div id="myNavButton">
    <Hamburger bind:open type="arrow" />
</div>
{#if open}
    <nav id="myNav" transition:fly={{ y: -200, duration: 1000 }}>
        <div id="navContent">
            <a href="/">POSTS</a>
            <!--a href="/experiments">EXPERIMENTS</a-->
            <a href="/kiswahili">KISWAHILI</a>
            <a href="/brewing">BREWING</a>
            <a href="/publications">PUBLICATIONS</a>
            <a href="/about">ABOUT</a>
        </div>
    </nav>
{/if}

<style>
    nav {
        position: fixed;
        top: 0;
        right: 80%;
        margin-right: 1em;

        padding: 1em;
        height: 100%;
        background-color: dimgray;
        text-align: center;
        font-weight: 500;
        color: black;
        clip-path: var(--ribbon);
    }

    a {
        display: block;
        padding-top: 0.1em;
        padding-bottom: 0.1em;
        transition: all 0.2s ease-in-out;
    }

    a:hover {
        color: whitesmoke;
    }

    #myNavButton {
        display: none;
        position: fixed;
        top: 0;
        z-index: 1000;
        left: 5%;
    }

    @media only screen and (max-width: 1000px) {
        #myNavButton {
            display: block;
        }
        nav {
            top: 4.1em;
            left: 5%;
        }
    }
</style>
