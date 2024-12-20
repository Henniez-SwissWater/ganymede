export async function getMarkup() {
    return await fetch("https://ganymede-api-559716506052.europe-west6.run.app/languages/kiswahili").then(r => r.json());
}