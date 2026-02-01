export function OrderDetail(){
    return `
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
    </aside>
    `
}

export function updateDetail(order,user) {
    document.querySelector('.text-xs.text-gray-500').textContent = user.role.charAt(0).toUpperCase() + user.role.slice(1)
}