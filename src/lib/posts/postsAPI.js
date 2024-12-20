export async function getPageCount(tag) {
    return await await fetch("https://ganymede-api-559716506052.europe-west6.run.app/posts/page_count?" + new URLSearchParams({
        "tag": tag
    })).then(res => res.json());
}

export async function getPagePosts(page, tag) {
    let url = "https://ganymede-api-559716506052.europe-west6.run.app/posts/page/" + page + "?" + new URLSearchParams({
        "tag": tag
    })
    return await fetch(url).then(r => r.json());
}

export async function getTags() {
    return await fetch("https://ganymede-api-559716506052.europe-west6.run.app/posts/tags").then(r => r.json());
}