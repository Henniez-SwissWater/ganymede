<script>
    import Publication from "./publication.svelte";

    let publications = [];

    publications.push({
        title: "Twist Triviality of Canonical Seifert Surfaces",
        credit: "arXiv, February 2015",
        resources: `<a href="http://arxiv.org/abs/1502.07582">arXiv:1308.5866</a>`,
    });

    publications.push({
        title: "Twist Triviality of Canonical Seifert Surfaces",
        credit: "Master’s Thesis, Institute of Mathematics, University of Bern, February 2015",
        resources: `<a href="/src/assets/MasterMath.pdf"
        >pdf</a
    >,
    <a href="/src/assets/MasterMath_slides.pdf"
        >slides</a
    >`,
    });

    publications.push({
        title: "Real-time Rendering of Refractive Objects in Participating Media",
        credit: "Master’s Thesis, Institute of Computer Science and Applied Mathematics, University of Bern, December 2009",
        resources: `<a
        href="/src/assets/MasterCS.pdf">pdf</a
    >,
    <a href="/src/assets/MasterCS_slides1.pdf"
        >slides1</a
    >,
    <a href="/src/assets/MasterCS_slides2.pdf"
        >slides2</a
    >,
    <a href="/src/assets/MasterCS_adaptive.avi"
        >adaptive_video</a
    >,
    <a href="/src/assets/MasterCS_reference.avi"
        >reference_video</a
    >,
    <a href="/src/assets/MasterCS_timing.avi"
        >timing_video</a
    >`,
    });

    publications.push({
        title: "The Logic of Justified Belief",
        credit: "Bachelor’s Thesis, Institute of Computer Science and Applied Mathematics, University of Bern, December 2008",
        resources: `<a href="/src/assets/BachelorMath.pdf"
        >pdf</a
    >,
    <a href="/src/assets/BachelorMath_slides.pdf"
        >slides</a
    >`,
    });

    publications.push({
        title: "Stochastic Ray Tracing",
        credit: "Bachelor’s Thesis, Institute of Computer Science and Applied Mathematics, University of Bern, January 2007",
        resources: `<a href="/src/assets/BachelorCS.pdf"
        >pdf</a
    >,
    <a href="/src/assets/BachelorCS_slides.pdf"
        >slides</a
    >`,
    });
</script>

<div>
    {#each publications as { title, credit, resources }}
        <Publication {title} {credit} {resources} />
    {/each}
</div>
