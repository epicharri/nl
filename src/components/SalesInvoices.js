import React from 'react'

const SalesInvoice = () => {
    return (
        <div>
            <p>Tämä on myyntilasku.</p>
        </div>
    )
}

const SalesInvoices =() => {
    return (
        <div>
            <p>Tämä sitten listaa myyntilaskuja.</p>
            <SalesInvoice></SalesInvoice>
        </div>
    )
}

export default SalesInvoices

