export async function getMarkup() {
    return await fetch("https://ganymede.ch:8000/brewing").then(r => r.json());
}