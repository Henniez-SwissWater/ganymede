export async function getMarkup() {
    return await fetch("https://ganymede.ch:8000/languages/kiswahili").then(r => r.json());
}