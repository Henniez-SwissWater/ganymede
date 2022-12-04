export async function getPageCount(tag) {
    return await await fetch("http://127.0.0.1:8000/posts/page_count?" + new URLSearchParams({
        "tag": tag
    })).then(res => res.json());
}

export async function getPagePosts(page, tag) {
    let url = "http://127.0.0.1:8000/posts/page/" + page + "?" + new URLSearchParams({
        "tag": tag
    })
    return await fetch(url).then(r => r.json());
}

export async function getTags() {
    return await fetch("http://127.0.0.1:8000/posts/tags").then(r => r.json());
}