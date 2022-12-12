<script>
    import SocialIcons from "@rodneylab/svelte-social-icons";
    let year = new Date().getFullYear();
</script>

<footer>
    <div id="links">
        <a href="mailto:michael.pfeuti@ganymede.ch">
            <SocialIcons network="email" fgColor="black" bgColor="dimgray" />
        </a>
        <a href="https://www.linkedin.com/in/michaelpfeuti">
            <SocialIcons
                network="linkedin"
                fgColor="black"
                bgColor="dimgray"
            /></a
        >
        <a href="https://github.com/MichaelPfeuti">
            <SocialIcons network="github" fgColor="black" bgColor="dimgray" /></a
        >
    </div>
    <div id="copyright">
        Copyright © {year} Michael Pfeuti
    </div>
</footer>

<style>
    footer {
        z-index: 1;
    }
    #links {
        padding: 0.5em;
        text-align: center;
        background-color: dimgray;
    }
    #copyright {
        padding: 0.5em;
        text-align: center;
        color: rgb(175, 175, 175);
        background-color: rgb(75, 75, 75);
    }
</style>
