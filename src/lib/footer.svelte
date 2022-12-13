<script>
    import cgit from "../assets/cgit_bw.png";
    import xing from "../assets/xing.png";
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
        <a href="http://www.xing.com/profile/Michael_Pfeuti2">
            <img
                src={xing}
                alt="xing"
                width="28"
                style="transform: translateY(-25%);"
            /></a
        >
        <a href="https://github.com/MichaelPfeuti">
            <SocialIcons
                network="github"
                fgColor="black"
                bgColor="dimgray"
            /></a
        >
        <a href="https://git.ganymede.ch">
            <img
                src={cgit}
                alt="cgit logo"
                width="40"
                style="transform: translateY(-50%);"
            /></a
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
