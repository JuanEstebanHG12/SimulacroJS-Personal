import { OrderCard } from "../../components/User/OrderCard"
import { getMyOrders } from "../../services/ordersServices.js"

export async function MyOrders() {
    const userId = JSON.parse(sessionStorage.getItem('user'))[0]
    const orders = await getMyOrders(userId.id) || []

    return `
    <main class="bg-[#f6faf4] min-h-screen p-8">

  <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

    <!-- LEFT: Recent Orders -->
    <section class="lg:col-span-2">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold">Recent Orders</h2>
        <a href="#" class="text-sm text-green-600">View All</a>
      </div>

      <div class="space-y-4">
        ${orders.length > 0 ? orders.map(i => OrderCard(i)).join('') : "<p>No hay ordenes para mostrar</p>"}
      </div>
    </section>

    <!-- RIGHT: Account Details -->
    <aside class="bg-white rounded-xl p-6 shadow-sm space-y-6">

      <h2 class="text-lg font-semibold">Account Details</h2>

      <!-- Profile -->
      <div class="text-center space-y-2">
        <div class="relative inline-block">
          <img
            src="https://i.pravatar.cc/100"
            class="w-20 h-20 rounded-full mx-auto"
          />
          <span class="absolute bottom-0 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></span>
        </div>
        <p class="font-semibold">${userId.name}</p>
        <p class="text-sm text-gray-500">${userId.email}</p>
        <span class="inline-block text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
          ${userId.role}
        </span>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-green-50 rounded-lg p-4 text-center">
          <p class="text-xs text-gray-500">TOTAL ORDERS</p>
          <p class="text-xl font-bold">${orders.length}</p>
        </div>
        <div class="bg-green-50 rounded-lg p-4 text-center">
          <p class="text-xs text-gray-500">LOYALTY PTS</p>
          <p class="text-xl font-bold text-green-600">450</p>
        </div>
      </div>

      <!-- Links -->
      <div class="space-y-3 text-sm">
        <a href="#" class="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50">
          <span>💳 Payment Methods</span>
          →
        </a>
        <a href="#" class="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50">
          <span>📍 Saved Addresses</span>
          →
        </a>
        <a href="#" class="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50">
          <span>⚙ Preferences</span>
          →
        </a>
      </div>

    </aside>

  </div>

  <footer class="mt-10 text-center text-xs text-gray-500">
    RestorApp Academic Simulation v1.0<br />
    Performance monitoring active.
  </footer>

</main>`
}