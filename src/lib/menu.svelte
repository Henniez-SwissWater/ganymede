<script>
    import { onMount } from "svelte";
    import { tweened } from "svelte/motion";
    import { cubicOut } from "svelte/easing";
    import { setRandomBorder } from "./utils/brownianBridge.js";
    import { Hamburger } from "svelte-hamburgers";
    const paddingBottom = 24;
    const frayingBottom = 3;
    const steps = 100;
    let open = false;
    let ribbonPath; 

    onMount(() => {
        ribbonPath = setRandomBorder(
            document.getElementById("myNav"),
            document.getElementById("navContent"),
            steps,
            paddingBottom,
            frayingBottom
        );
    });

    const arrowRotation = tweened(1, {
        duration: 300,
        easing: cubicOut,
    });

    function handleBurgerClick() {
        $arrowRotation = open ? 0 : 90;
    }

    const menuMovement = tweened(0, {
        duration: 300,
        easing: cubicOut,
    });

    $: $menuMovement = open ? 4.1 : -40;
</script>

<div id="myNavButton" style="transform: rotate({$arrowRotation}deg)">
    <Hamburger bind:open on:click={handleBurgerClick} type="arrow" />
</div>

<nav id="myNav" style="--menuPosition: {$menuMovement}em; --ribbon: {ribbonPath}">
    <div id="navContent">
        <a href="/">POSTS</a>
        <!--a href="/experiments">EXPERIMENTS</a-->
        <a href="/kiswahili">KISWAHILI</a>
        <a href="/brewing">BREWING</a>
        <a href="/publications">PUBLICATIONS</a>
        <a href="/about">ABOUT</a>
    </div>
</nav>

<style>
    nav {
        position: fixed;
        top: 0;
        right: 80%;
        margin-right: 1em;

        padding: 1em;
        height: 100%;
        background-color: dimgray;

        color: black;
        clip-path: var(--ribbon);
        
        width: fit-content;
        
        text-align: center;
        font-weight: 500;
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
        left: 1%;
        z-index: 1000;
    }

    @media only screen and (max-width: 1000px) {
        #myNavButton {
            display: block;
        }

        nav {
            left: 0;
            right: auto;
            transform: translate(0, var(--menuPosition))
        }
    }
</style>
