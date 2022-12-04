<script>
    import { onMount } from "svelte";
    import { setRandomBorder } from "./utils/brownianBridge.js";
    const paddingBottom = 5;
    const frayingBottom = 3;
    const steps = 100;


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

<nav id="myNav">
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
</style>
