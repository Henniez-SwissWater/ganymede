<script>
    import { afterUpdate } from "svelte";
    import { marked } from "marked";
    import { getMarkup } from "./kiswahiliAPI.js";
    import {
        contextMenuLinks,
        contextMenuTitle,
    } from "../stores/contextMenuStore";
    const options = {
        breaks: true,
        gfm: true,
    };

    let source = "";
    getMarkup().then((text) => {
        source = marked.parse(text);
    });

    afterUpdate(() => {
        contextMenuTitle.set("Kiswahili Grammer");
        const tocElements = document.querySelectorAll("#kiswahili h3");
        const elements = Array.from(tocElements).map((e) => ({
            link: "#" + e.id,
            label: e.textContent,
        }));
        contextMenuLinks.set(elements);
    });
</script>

<div id="kiswahili">{@html source}</div>

<style>
    div :global(h3) {
        margin-top: 0.8em;
    }

    div :global(p) {
        padding-top: 0.5em;
        padding-bottom: 0.5em;
    }

    div :global(a) {
        font-weight: 500;
    }

    div :global(table), :global(th), :global(td) {
        border: 1px solid;
        border-collapse: collapse;
        border-color: gray;
    }

    div :global(table) {
        empty-cells: show;
        margin-left: 0.5em;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }

    div :global(th), :global(td){
        padding-top: 0.3em;
        padding-bottom: 0.3em;
        padding-left: 0.5em;
        padding-right: 0.5em;
    }

    div :global(th){
        background-color: lightgray;
    }

</style>
