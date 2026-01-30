import { render } from "../../core/render.js"
import { Dashboard } from "../../views/User/Dasboard.js"

export function CardCarrito(item) {
    
    return `
    <div data-id='${JSON.stringify(item)}' class="card-order flex gap-1 justify-between">
            <img class="h-15"
                src='${item.src_image}' />
            <div class="flex flex-col">
                <p>${item.name}</p>
                <p class="text-xs text-green-600">No onios</p>
                <div class="my-4 flex gap-2">
                    <div class="flex bg-gray-200 border border-gray-300 rounded-lg">
                        <button class="px-4" id="btn-decrease">-</button>
                        <span>${item.cont}</span>
                        <button class="px-4" id="btn-increase">+</button>
                    </div>
                    <button id="remove-item" class="text-red-500 text-xs">Remove</button>
                </div>
            </div>
            <div class="flex flex-col">
                <span calss="w-full">$${item.price}</span>
                <span class="w-full text-gray-400">$${item.price * item.cont}</span>
            </div>
        </div>

    `
}


document.addEventListener('click', async (e) => {

    if (e.target.id == "btn-increase") {
        const cart = JSON.parse(localStorage.getItem('cart')) || []

        let data = e.target.closest('.card-order').dataset.id
        data = JSON.parse(data)


        const itemIndex = cart.findIndex(i => i.id == data.id)
        const item = { ...cart[itemIndex] }
        item.cont = item.cont + 1
        cart.splice(itemIndex, 1)

        //cart.push(item)
        /* Agregar en el mismo index que estaba */
        const nuevaLista = [
            ...cart.slice(0, itemIndex),
            item,
            ...cart.slice(itemIndex)
        ];
        localStorage.setItem('cart', JSON.stringify(nuevaLista))
        render(await Dashboard())
    }

    if (e.target.id == "btn-decrease") {
        const cart = JSON.parse(localStorage.getItem('cart')) || []

        let data = e.target.closest('.card-order').dataset.id
        data = JSON.parse(data)


        const itemIndex = cart.findIndex(i => i.id == data.id)
        const item = { ...cart[itemIndex] }
        if (item.cont <= 1) {
            removeItem(cart, itemIndex)
            render(await Dashboard())
            return
        }
        item.cont = item.cont - 1

        cart.splice(itemIndex, 1)

        //cart.push(item)
        const nuevaLista = [
            ...cart.slice(0, itemIndex),
            item,
            ...cart.slice(itemIndex)
        ];
        localStorage.setItem('cart', JSON.stringify(nuevaLista))
        render(await Dashboard())
    }

    if (e.target.id == "remove-item") {
        const cart = JSON.parse(localStorage.getItem('cart')) || []

        /* Obtener el id del data-id (Recordar que pase todo el objeto por data-id) */
        let data = e.target.closest('.card-order').dataset.id
        data = JSON.parse(data)
        const itemIndex = cart.findIndex(i => i.id == data.id)
        removeItem(cart, itemIndex)
        render(await Dashboard())
    }
})


function removeItem(cart, index) {
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
}

