import { render } from "../../core/render.js"
import { createOrders } from "../../services/ordersServices.js"
import { CalculateSubtotal, CalculateTax } from "../../utils/utils.js"
import { Dashboard } from "../../views/User/Dasboard.js"
import { CardCarrito } from "./CardCarrito.js"

export function Order() {
    const cart = JSON.parse(localStorage.getItem('cart')) || []


    return `
    <div class="h-fit p-2 border border-gray-300 rounded-lg ">
        <div class="header-order flex justify-between border-b-1 border-gray-200 pb-5">
            <div class="flex items-center font-semibold gap-1">
                <p>Your order</p>
                <span class="rounded-full h-6 w-6 p-1 bg-green-400 text-xs text-center">${cart.length}</span>
            </div>
            <p id="remove-all" class="font-thin text-green-600">Clear all</p>
        </div>
        ${cart.map(item => CardCarrito(item)).join('')}
        <div class="footer-order mt-2 flex flex-col">
            <div class="flex justify-between text-xs text-green-600">
                <span>Subtotal</span>
                <span>$${CalculateSubtotal(cart)}</span>
            </div>
            <div class="flex justify-between text-xs text-green-600">
                <span>Tax(8%)</span>
                <span>$${CalculateTax(cart)}</span>
            </div>
            <div class="flex justify-between border-t border-gray-200 border-dashed mt-2">
                <span>Total</span>
                <span>$${CalculateSubtotal(cart) + CalculateTax(cart)}</span>
            </div>
            <button id="confirm-order" class="flex justify-center items-center bg-green-500 mx-4 py-2 mt-2 rounded-lg">
                Confirm Order
                <span class="material-symbols-outlined">
                    arrow_right_alt
                </span>
            </button>
        </div>
    </div>`
}

document.addEventListener('click', async (e) => {

    if (e.target.id == "remove-all") {
        localStorage.removeItem('cart')
        render(await Dashboard())
    }

    if (e.target.id == "confirm-order") {
        confirmOrder()
    }
})

function confirmOrder() {
    const cart = JSON.parse(localStorage.getItem('cart'))
    const total = CalculateSubtotal(cart) + CalculateTax(cart)        
    if (cart) {
        createOrders(cart, total)
        console.log(cart);
    }
    else{
        console.log("error");
    }
        
}
