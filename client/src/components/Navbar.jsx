import { useAtom } from 'jotai'
import React from 'react'
import { cartAtom } from '../jotai/cartAtoms';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate=useNavigate();
    const [cart]= useAtom(cartAtom);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" role="button" onClick={()=>navigate('/')}>
                    <div className="rounded-circle d-flex align-items-center justify-content-center text-white" style={{width:38,height:38,background:'linear-gradient(45deg,#4f46e5,#ec4899)'}}>
                        <small className="fw-bold">SS</small>
                    </div>
                    <div className="ms-2">
                        <div className="fw-bold mb-0">SkillSphere</div>
                        <small className="text-muted">Learn. Build. Grow.</small>
                    </div>
                </a>

                <div className="d-flex ms-auto align-items-center">
                    <button className="btn btn-success me-3" onClick={() => navigate('/cart')}>
                        Cart <span className="badge bg-white text-success ms-2">{cart.length}</span>
                    </button>
                    <button className="btn btn-outline-secondary" onClick={()=>navigate('/')}>Courses</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
