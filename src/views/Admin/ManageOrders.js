import { CardOrder } from "../../components/Admin/CardOrder.js"
import { OrderDetail } from "../../components/Admin/OrderDetail.js"
import { getOrders } from "../../services/ordersServices.js"

export async function ManageOrders(){
  const orders = await getOrders()
  
    return`
    <!-- STATS -->
<section class="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="bg-white p-5 rounded-xl border shadow-sm">
    <p class="text-sm text-gray-500">Total Orders</p>
    <p class="text-2xl font-bold text-gray-800">${orders.length}</p>
  </div>

  <div class="bg-white p-5 rounded-xl border shadow-sm">
    <p class="text-sm text-gray-500">Pending Orders</p>
    <p class="text-2xl font-bold text-yellow-600">15</p>
  </div>

  <div class="bg-white p-5 rounded-xl border shadow-sm">
    <p class="text-sm text-gray-500">Today's Revenue</p>
    <p class="text-2xl font-bold text-green-600">$3,450</p>
  </div>
</section>

<!-- MAIN CONTENT -->
<section class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

  <!-- ORDERS TABLE -->
  <div class="lg:col-span-2 bg-white rounded-xl border shadow-sm p-5">
    <div class="flex justify-between items-center mb-4">
      <h2 class="font-semibold text-gray-800">Recent Orders</h2>
      <div class="flex gap-2">
        <button class="px-3 py-1.5 border rounded-md text-sm hover:bg-gray-100">
          Filter
        </button>
        <button class="px-3 py-1.5 border rounded-md text-sm hover:bg-gray-100">
          Export
        </button>
      </div>
    </div>

    <table class="w-full text-sm">
      <thead class="text-left text-gray-500 border-b">
        <tr>
          <th class="py-3">ID</th>
          <th>User</th>
          <th>Date</th>
          <th>Status</th>
          <th class="text-right">Total</th>
        </tr>
      </thead>

      <tbody>
       ${orders.map(o => CardOrder(o.id)
       ).join('')}

        
      </tbody>
    </table>

    <!-- PAGINATION -->
    <div class="flex justify-center items-center gap-2 mt-5 text-sm">
      <button class="px-2 text-gray-500 hover:text-gray-800">‹</button>
      <button class="w-8 h-8 rounded-full bg-green-500 text-white">1</button>
      <button class="w-8 h-8 rounded-full hover:bg-gray-100">2</button>
      <button class="w-8 h-8 rounded-full hover:bg-gray-100">3</button>
      <span>…</span>
      <button class="w-8 h-8 rounded-full hover:bg-gray-100">12</button>
      <button class="px-2 text-gray-500 hover:text-gray-800">›</button>
    </div>
  </div>

  ${OrderDetail()}

    `
}