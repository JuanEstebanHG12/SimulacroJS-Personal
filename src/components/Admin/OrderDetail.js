import { updateStatusOrder } from "../../services/ordersServices.js"
import { CalculateSubtotal, CalculateTax, capitalizeCase } from "../../utils/utils.js"
import { render } from '../../core/render.js'
import { ManageOrders } from "../../views/Admin/ManageOrders.js"

export function OrderDetail() {

  return `
    <aside class="bg-white rounded-xl border shadow-sm  space-y-4 hidden">
    <div class="p-5">
    <div class="flex justify-between items-center">
      <h3 class="font-semibold text-gray-800">Order Details</h3>
      <span id="order-status" class="text-xs text-blue-600 px-3 py-1 rounded-full">
        Preparing
      </span>
    </div>

    <div>
      <p class="text-xs text-gray-500">Customer</p>
      <p id="user-name" class="font-semibold text-gray-800">Alice Smith</p>
      <p id="user-email" class="text-sm text-gray-500">alice.smith@example.com</p>
    </div>

    <div id="menu-list" class="border-t pt-3 space-y-2 text-sm">
     
    </div>

    <div class="border-t pt-3 text-sm space-y-1">
      <div class="flex justify-between">
        <span>Subtotal</span>
        <span id="subtotal-detail">$</span>
      </div>
      <div class="flex justify-between text-gray-500">
        <span>Tax (8%)</span>
        <span id="tax-detail">$</span>
      </div>
      <div class="flex justify-between font-semibold text-gray-800">
        <span>Total</span>
        <span id="total-detail">$</span>
      </div>
    </div>
    </div>
    <div id="status-details" class="p-5 bg-gray-300 flex flex-col">
    
      
    </div>
    </aside>
    `
}

export function updateDetail(order, user) {
  const lista = (item) =>
    `<div class="flex justify-between">
        <span>${item.name} x${item.cont}</span>
        <span>$${item.price}</span>
        <span class="text-gray-400">$${item.price * item.cont}</span>
      </div>`
  document.querySelector('aside').classList.remove('hidden')
  document.querySelector('.text-xs.text-gray-500').textContent = capitalizeCase(user.role)
  document.querySelector('#user-name').textContent = capitalizeCase(user.name)
  document.querySelector('#user-email').textContent = capitalizeCase(user.email)
  document.querySelector('#order-status').classList.add(`${order.status}`)
  document.querySelector('#order-status').textContent = capitalizeCase(order.status)
  document.querySelector('#menu-list').innerHTML = order.items.map(item => lista(item)).join('')
  document.querySelector('#subtotal-detail').textContent = `$${CalculateSubtotal(order.items)}`
  document.querySelector('#tax-detail').textContent = `$${CalculateTax(order.items)}`
  document.querySelector('#total-detail').textContent = `$${CalculateTax(order.items) + CalculateSubtotal(order.items)}`

  const updateSection = document.querySelector('#status-details')
  updateSection.innerHTML = `  <p>UPDATE STATUS</p>
      <div class="flex gap-2">
          <select class="border rounded bg-white px-2 py-1 w-[60%]" name="" id="">
            <option ${order.status == 'preparing' ? 'selected' : ''} value="preparing">Preparing</option>
            <option ${order.status == 'pending' ? 'selected' : ''} value="pending">Pending</option>
            <option ${order.status == 'ready' ? 'selected' : ''} value="ready">Ready</option>
            <option ${order.status == 'delivered' ? 'selected' : ''} value="delivered">Delivered</option>
        </select>
        <button class="w-[40%] rounded bg-green-500">UPDATE ✅</button>
      </div>`

  const buttonUpdate = updateSection.querySelector('button')
  const selectUpdate = updateSection.querySelector('select')
  buttonUpdate.addEventListener('click', async () => {
    updateStatusOrder(order.id, selectUpdate.value)
    render(await ManageOrders())
  })

}
