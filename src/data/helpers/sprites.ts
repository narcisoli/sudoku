export function loadSprites(url: string) {
    const spriteContainer = document.querySelector("#sprites")

    if (!spriteContainer)
        return

    return new Promise<{}>(() => {
        const xhr = new XMLHttpRequest()
        xhr.open("GET", url)
        xhr.responseType = 'text'

        xhr.onloadend = () => {
            if (xhr.readyState == 4 && xhr.status != 404 )
                spriteContainer.innerHTML += xhr.response
        }

        xhr.send()
    })
}
