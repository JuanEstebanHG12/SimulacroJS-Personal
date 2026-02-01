export function ManageOrders(){
    return`
    <!-- STATS -->
<section class="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="bg-white p-5 rounded-xl border shadow-sm">
    <p class="text-sm text-gray-500">Total Orders</p>
    <p class="text-2xl font-bold text-gray-800">1,245</p>
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
        <tr   tabindex="0"
  class="
    border
    rounded-xl
    p-4
    cursor-pointer
    transition-all
    duration-200
    focus:outline-none
    focus:bg-green-200
  ">
          <td class="py-3 font-medium text-green-600">#1024</td>
          <td>Alice Smith</td>
          <td>Oct 27, 14:30</td>
          <td>
            <span class="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">
              Preparing
            </span>
          </td>
          <td class="text-right font-medium">$45.00</td>
        </tr>

        <tr  tabindex="1"
  class="
    border
    rounded-xl
    p-4
    cursor-pointer
    transition-all
    duration-200
    focus:outline-none
    focus:bg-green-200
  ">
          <td class="py-3">#1023</td>
          <td>Bob Jones</td>
          <td>Oct 27, 14:15</td>
          <td>
            <span class="px-2 py-1 text-xs bg-yellow-100 text-yellow-600 rounded-full">
              Pending
            </span>
          </td>
          <td class="text-right">$12.50</td>
        </tr>

        <tr  tabindex="2"
  class="
    border
    rounded-xl
    p-4
    cursor-pointer
    transition-all
    duration-200
    focus:outline-none
    focus:bg-green-200
  ">
          <td class="py-3">#1022</td>
          <td>Charlie Day</td>
          <td>Oct 27, 13:50</td>
          <td>
            <span class="px-2 py-1 text-xs bg-green-100 text-green-600 rounded-full">
              Delivered
            </span>
          </td>
          <td class="text-right">$32.00</td>
        </tr>
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

  <!-- ORDER DETAILS -->
  <aside class="bg-white rounded-xl border shadow-sm p-5 space-y-4">
    <div class="flex justify-between items-center">
      <h3 class="font-semibold text-gray-800">Order Details</h3>
      <span class="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
        Preparing
      </span>
    </div>

    <div>
      <p class="text-xs text-gray-500">Customer</p>
      <p class="font-semibold text-gray-800">Alice Smith</p>
      <p class="text-sm text-gray-500">alice.smith@example.com</p>
    </div>

    <div class="border-t pt-3 space-y-2 text-sm">
      <div class="flex justify-between">
        <span>Burger Classic</span>
        <span>$24.00</span>
      </div>
      <div class="flex justify-between">
        <span>Truffle Fries</span>
        <span>$8.00</span>
      </div>
      <div class="flex justify-between">
        <span>Vanilla Shake</span>
        <span>$5.00</span>
      </div>
      <div class="flex justify-between">
        <span>Chocolate Cake</span>
        <span>$8.00</span>
      </div>
    </div>

    <div class="border-t pt-3 text-sm space-y-1">
      <div class="flex justify-between">
        <span>Subtotal</span>
        <span>$45.00</span>
      </div>
      <div class="flex justify-between text-gray-500">
        <span>Tax (8%)</span>
        <span>$3.60</span>
      </div>
      <div class="flex justify-between font-semibold text-gray-800">
        <span>Total</span>
        <span>$48.60</span>
      </div>
    </div>

    <di

    `
}