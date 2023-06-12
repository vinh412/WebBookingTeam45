import { useNavigate, Link } from "react-router-dom";
import React, { memo } from "react"
import avatar from "../../asset/avatar.jpg"


const NavBar = ({status}) => {
   
    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('/login');
    };
    const navigateToSignup = () => {
        navigate('/signup');
    };
    
   


    
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">WebBooking</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        
                        {!status?<ul className='navbar-nav me-2'>
                                    <li className='nav-item me-2'>
                                        <button className='btn btn-outline-primary' onClick={navigateToLogin}>Đăng nhập</button>
                                    </li>
                                    <li className='nav-item'>
                                        <button className="btn btn-primary" type="button" onClick={navigateToSignup}>Tạo tài khoản</button>
                                    </li>
                                </ul>
                                :<ul className='navbar-nav me-2'>
                                    <li className='nav-item me-2'>  
                                        <button className='btn btn-outline-primary mx-3'>Đăng ký làm đối tác</button>
                                    </li>
                                    <li className='nav-item me-2'>
                                    <img src={avatar} 
                                            alt="icon Quantrimang.com" 
                                            class="rounded-circle" 
                                            width="35" height="35"/> 
                                    </li>
                                    
                                </ul>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default memo(NavBar);
