import { render } from "../../core/render.js"
import { Dashboard } from "../../views/User/Dasboard.js"

export function CardCarrito(item) {
    return `
    <div data-id='${JSON.stringify(item)}' class="card-order flex gap-1">
            <img class="h-15"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGAqYChtquA1BiCWMNMITy-hrzbVNWWehaSw&s" />
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
            <span>$${item.price}</span>
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
        console.log(cart);
        removeItem(cart)
        render(await Dashboard())
    }
})
function removeItem(cart, index) {
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
}

