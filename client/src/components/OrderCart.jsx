import React from 'react'

const OrderCart = ({title,price}) => {
  return (
    <div className="d-flex justify-content-between align-items-center w-100">
        <div>
            <h6 className="mb-0">{title}</h6>
            <small className="text-muted">Course</small>
        </div>
        <div className="text-primary fw-semibold">₹ {price}</div>
    </div>
  )
}

export default OrderCart
