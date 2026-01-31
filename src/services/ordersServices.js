import { API, getDate } from "../utils/utils.js";

class Order {
    constructor(userId, items, total) {
        this.userId = userId,
            this.items = items,
            this.total = total,
            this.status = "pending",
            this.createdAt = getDate()

    }
}

export async function createOrders(orderList, total) {
    const userId = JSON.parse(sessionStorage.getItem('user'))

    const order = new Order(userId[0].id, orderList, total)


    const response = await fetch(`${API.BASE_API}/${API.ORDERS}`, {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(order)
    })

    if (response.ok) {
        localStorage.removeItem('cart')
    }
    return response
}

export async function getMyOrders(userId) {
    try {
        const response = await fetch(`${API.BASE_API}/${API.ORDERS}?userId=${userId}`)
        const data = await response.json()
        if (!response.ok) throw new Error('Error al obtener datos')
        return data
    } catch (error) {
        console.error(error);
    }
}