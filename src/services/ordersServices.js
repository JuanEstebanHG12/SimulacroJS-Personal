import { getDate } from "../utils/utils.js";

class Order {
    constructor(userId, items, total) {
        this.userId = userId ,
        this.items = items,
        this.total = total,
        this.status = "active",
        this.createdAt = getDate()

    }
}

export async function createOrders(ordersList,total) {
    const userId = JSON.parse(sessionStorage.getItem('user'))
    
    const order = new Order(userId[0].id,ordersList,total)
    
    
    const response = await fetch('http://localhost:3000/pedidos', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: order
    })
    
    if (response.ok) {
        localStorage.removeItem('cart')
    }
    return response
}

