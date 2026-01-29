import { MenuCard } from "./MenuCard.js"

export function MenuGrig(menu) {
    
    return `
    <section class="grid justify-items-center grid-flow-col grid-cols-3 w-full mt-9">
           ${menu.map((item) =>
            MenuCard(item)
           ).join('')}
        </section>
    `
}