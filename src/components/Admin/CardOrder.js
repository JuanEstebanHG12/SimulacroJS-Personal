import { getOrdersById } from "../../services/ordersServices.js";
import { getUserById } from "../../services/usersServices.js";
import { capitalizeCase } from "../../utils/utils.js";
import { updateDetail } from "./OrderDetail.js";

export function CardOrder(order, users) {
  const {name} = users.find(u => u.id == order.userId)
  
  return `
     <tr id="${order.id}"   tabindex="0"
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
          <td class="py-3 font-medium">#${order.id}</td>
          <td>${name}</td>
          <td>${order.createdAt}</td>
          <td>
            <span class="px-2 py-1 text-xs ${order.status} rounded-full">
              ${capitalizeCase(order.status)}
            </span>
          </td>
          <td class="text-right font-medium">$${order.total}</td>
        </tr>
    `
}

document.addEventListener('click', async (e) => {

  //console.log(e.target.closest('.order-card').tagName);
  if (e.target.closest('.order-card')) {
    const card = e.target.closest('.order-card')
    const order = await getOrdersById(card.id)
    const user = await getUserById(order.userId)
    updateDetail(order, user)
  }
})
