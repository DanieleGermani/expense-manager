export const amountFormat = amount => {
    return Number(amount).toLocaleString('es-ES', {
        style: 'currency',
        currency: 'EUR'
    })
}

export const generateId = () => {
    const date = Date.now().toString(36)
    const random = Math.random().toString(36).substring(2)
    return random + date
}

export const dateFormat = fecha => {
    const newDate = new Date(fecha)
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return newDate.toLocaleDateString('es-ES', opciones)
}