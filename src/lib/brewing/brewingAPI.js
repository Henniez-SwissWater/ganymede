export async function getMarkup() {
    return await fetch("http://127.0.0.1:8000/brewing").then(r => r.json());
}