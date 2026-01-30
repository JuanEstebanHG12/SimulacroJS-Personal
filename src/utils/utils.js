function CalculateSubtotal(cart) {
    if (cart.length > 0){
        const subTotal = cart.reduce((a, b) => Number(a) + (Number(b.price)* Number(b.cont)), 0)
        return subTotal
    }
    return 0
}

function CalculateTax(cart){
    const sub = CalculateSubtotal(cart)
    return sub * 0.08
    
}
function getDate(){
    const fechaObject = new Date()
    const day = fechaObject.getDay()
    const month = fechaObject.getMonth()+1
    const year = fechaObject.getFullYear()
    

    return `${day}/${month}/${year}`
}

export {
    CalculateSubtotal,
    CalculateTax,
    getDate
}