import { getMenuItems } from "../../services/menuServices.js"
import { MenuCard } from "./MenuCard.js"

export async function MenuGrid() {
    const menu = await getMenuItems()
    console.log(menu);
    
    return `
    <section class="grid justify-items-center grid-flow-col grid-cols-3 w-full mt-9">
           ${menu.map((item) =>
            MenuCard(item)
           ).join('')}
        </section>
    `
}