import React from 'react'

let DetailedItem = ({detailRowData}) => {
    return (
        <div>
            <div>id: <strong>{detailRowData.id}</strong></div>
            <div>firstName: <strong>{detailRowData.firstName}</strong></div>
            <div>lastName: <strong>{detailRowData.lastName}</strong></div>
            <div> email: <strong>{detailRowData.email}</strong></div>
            <div>phone: <strong>{detailRowData.phone}</strong></div>
            <div>address:
               <div> streetAddress: <strong>{detailRowData.address.streetAddress}</strong></div>
                <div> city: <strong>{detailRowData.address.city}</strong></div>
                <div> state: <strong>{detailRowData.address.state}</strong></div>
                <div> zip: <strong>{detailRowData.address.zip}</strong></div>
            </div>
            <div>description: <strong>{detailRowData.description}</strong></div>


        </div>
    )
}

export default DetailedItem;