import React from 'react'
import { useNavigate } from 'react-router-dom'

const Coursecard = ({title,price,id}) => {
    const navigate = useNavigate();
  return (
    <div className="card h-100 shadow-sm">
        <div className="card-body d-flex flex-column">
            <h5 className="card-title">{title}</h5>
            <p className="card-text text-muted flex-grow-1">Designed to help you master essential skills with confidence.</p>
            <div className="d-flex justify-content-between align-items-center mt-3">
                <div className="fw-bold text-primary">₹ {price}</div>
                <button className='btn btn-sm btn-primary' onClick={()=>navigate(`/description/${id}`)}>View Details</button>
            </div>
        </div>
    </div>
  )
}

export default Coursecard
