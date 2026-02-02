// Configuración de la API con las rutas base y endpoints
export const API = {
    BASE_API: 'http://localhost:3000',  // URL base del servidor local
    USERS: 'users',  // Endpoint para usuarios
    ORDERS: 'pedidos',  // Endpoint para pedidos
    MENU: 'menu'  // Endpoint para el menú
}

// Función para calcular el subtotal del carrito
function CalculateSubtotal(cart) {
    if (cart.length > 0 && cart) {
        // Suma el precio de cada item multiplicado por su cantidad
        const subTotal = cart.reduce((a, b) => Number(a) + (Number(b.price) * Number(b.cont)), 0)
        return subTotal
    }
    return 0
}

// Función para calcular el impuesto (8%) sobre el subtotal
function CalculateTax(cart) {
    if (cart.length > 0 && cart) {
        const sub = CalculateSubtotal(cart)  // Obtenemos el subtotal
        return sub * 0.08  // Calculamos el 8% de impuesto
    }
    return 0
}

// Función para obtener la fecha actual en formato dd/mm/yyyy
function getDate() {
    const fechaObject = new Date()  // Creamos un objeto Date
    const day = fechaObject.getDate()  // Día del mes
    const month = fechaObject.getMonth() + 1  // Mes (sumamos 1 porque getMonth() devuelve 0-11)
    const year = fechaObject.getFullYear()  // Año
    return `${day}/${month}/${year}`  // Retornamos la fecha formateada
}

// Función para capitalizar la primera letra de un texto
function capitalizeCase(text) {
    return text.charAt(0).toUpperCase() + text.slice(1)  // Primera letra en mayúscula + resto del texto
}

// Exportamos las funciones para usarlas en otros módulos
export {
    capitalizeCase,
    CalculateSubtotal,
    CalculateTax,
    getDate
}
