export function CardCarrito(item){
    return `
    <div class="card-order flex gap-1">
            <img class="h-15"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGAqYChtquA1BiCWMNMITy-hrzbVNWWehaSw&s" />
            <div class="flex flex-col">
                <p>${item.name}</p>
                <p class="text-xs text-green-600">No onios</p>
                <div class="my-4 flex gap-2">
                    <div class="flex gap-4 bg-gray-200 border border-gray-300 rounded-lg px-4">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                    <button class="text-red-500 text-xs">Remove</button>
                </div>
            </div>
            <span>$8.99</span>
        </div>

    `
}