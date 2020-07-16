import React from 'react'

const PurchaseInvoice = () => {
    return (
        <div>
            <p>Tämä on ostolasku.</p>
        </div>
    )
}

const PurchaseInvoices =() => {
    return (
        <div>
            <p>Tämä sitten listaa ostolaskuja.</p>
            <PurchaseInvoice></PurchaseInvoice>
        </div>
    )
}

export default PurchaseInvoices
