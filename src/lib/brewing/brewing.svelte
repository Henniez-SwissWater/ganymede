<script>
    import { afterUpdate } from "svelte";
    import { Accordion, AccordionItem } from "svelte-collapsible";
    import { marked } from "marked";
    import { getMarkup } from "./brewingAPI.js";

    let htmlCode = [];
    getMarkup().then((protocols) => {
        protocols.forEach((p) => (p["content"] = marked.parse(p["content"])));
        htmlCode = protocols;
    });
</script>

<div id="brewing">
<Accordion>
    {#each htmlCode as item}
        <AccordionItem key={item.title}>
            <h2 slot="header">{item.title}</h2>

            <div slot="body" id="body">
                {@html item.content}
            </div>
        </AccordionItem>
    {/each}
</Accordion>
</div>

<style>
	#brewing :global(.accordion-item) {
		border-bottom: 1px solid rgb(100, 120, 140);
        padding-bottom: .5em;
        margin-top: 0.5em;
	}
    #body {
        padding-top: 0.5em;
    }
</style>
