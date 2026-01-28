const app = document.getElementById('app')

export function render(content) {
    return app.innerHTML =` 
        nav
        ${content}
        footer
    `
}