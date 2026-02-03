export function OrderCard(ordersList){
     const status = {
            'pending' : '<div class="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">⏱️</div>' ,
            'delivered' : '<div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">🚚</div>',
            'canceled' : '<div class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">✖</div>',
            'preparing' : '<div class="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">🍳</div>',
            'ready' : '<div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">✔️</div>'
        }
    
    
    return `
    <!-- Order item -->
        <div class="bg-white rounded-xl p-4 shadow-sm flex justify-between items-center">
          <div class="flex items-center gap-4">
            ${status[ordersList.status]}
            <div>
              <p class="font-semibold">#ORD-${ordersList.id}</p>
              <p class="text-sm text-gray-500">${ordersList.createdAt} · ${ordersList.items.length} Items</p>
            </div>
          </div>

          <div class="text-right space-y-1">
            <p class="font-semibold">$${ordersList.total}</p>
            <span class="inline-block text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
              ${ordersList.status.charAt(0).toUpperCase() + ordersList.status.slice(1)}
            </span>
          </div>
        </div>
    `
}