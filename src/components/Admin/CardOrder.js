import { getOrdersById } from "../../services/ordersServices.js";
import { getUserById } from "../../services/usersServices.js";
import { updateDetail } from "./OrderDetail.js";

export function CardOrder(id) {
    return `
     <tr id="${id}"   tabindex="0"
  class=" order-card
    border
    rounded-xl
    p-4
    cursor-pointer
    transition-all
    duration-200
    focus:outline-none
    focus:bg-green-200
    focus:text-green-600
  ">
          <td class="py-3 font-medium">#1024</td>
          <td>Alice Smith</td>
          <td>Oct 27, 14:30</td>
          <td>
            <span class="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">
              Preparing
            </span>
          </td>
          <td class="text-right font-medium">$45.00</td>
        </tr>
    `
}

document.addEventListener('click',async (e) => {

    //console.log(e.target.closest('.order-card').tagName);
    if (e.target.closest('.order-card')) {
        const card = e.target.closest('.order-card')
        const order = await getOrdersById(card.id)
        const user = await getUserById(order.userId)
        updateDetail(order,user)
    }
})
