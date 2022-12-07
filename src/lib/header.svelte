<script>
    import Brownian from "./brownian.svelte";
    //font-family: Tahoma, Verdana, sans-serif;
</script>

<header>
    <h1><a href="/">Michael Pfeuti</a></h1>
    <p>
        Greetings from <a href="https://en.wikipedia.org/wiki/Solothurn"
            >Solothurn</a
        >, <a href="https://en.wikipedia.org/wiki/Switzerland">Switzerland</a>
    </p>
</header>

<style>
    header {
        position: fixed;
        top: 0;
        padding-top: 0.5em;
        width: 60%;
        margin: auto;
        z-index: 100;
        background-color: white;
        border-bottom-style: solid;
        border-bottom-width: 0.1em;
        border-bottom-color: rgb(25, 25, 25);
    }
    @media only screen and (max-width: 1000px) {
        header {
            left: 0;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

    h1 {
        margin-bottom: 0.1em;
    }
    p {
        font-size: 0.8em;
    }
</style>
