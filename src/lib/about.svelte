<div id="about">
    <div id="picture">
        <img
            src="https://files.ganymede.ch/files/images/me.jpg"
            alt="Michael Pfeuti"
            width="100%"
        />
    </div>
    <div id="text">
        <p>My name is Michael Pfeuti.</p>
        <p>
            I am a Swiss citizen and work as a Data Scientist at <a
                href="https://www.mobiliar.ch">die Mobiliar</a
            >.
        </p>
        <p>
            I majored in Computer Science and Mathematics at the University of
            Bern. In 2018 I got certified by the <a
                href="https://www.actuaries.ch"
                >Swiss Association of Actuaries
            </a> as a fully certified actuary.
        </p>

        <div id="fsf">
            <a href="http://www.fsf.org/register_form?referrer=9390"
                ><img
                    src="https://static.fsf.org/nosvn/associate/crm/170576.png"
                    alt="[FSF Associate Member]"
                    width="20%"
                /></a
            >
        </div>
    </div>
</div>

<style>
    #fsf {
        padding:0.8em;
        text-align: center;
    }
    #about {
        display: flex;
        margin-top: 0;
    }

    #picture {
        flex: 1;
    }

    #text {
        flex: 4;
        margin-left: 0.8em;
    }

    p {
        margin-bottom: 0.8em;
    }

    @media only screen and (max-width: 1000px) {
        #about {
            flex-direction: column;
        }

        img {
            width: 25%;
            margin-left: 0.8em;
            margin-bottom: 1em;
            display: block;
        }
    }
</style>
