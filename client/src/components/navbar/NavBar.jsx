import { useNavigate, Link } from "react-router-dom";
import React, { memo } from "react"
import avatar from "../../asset/avatar.jpg"
import { useSelector , useDispatch} from "react-redux";
import * as actions from '../../store/actions'


const NavBar = () => {
   
    const navigate = useNavigate();
    const {isLoggedIn} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigateToLogin = () => {
        navigate('/login');
    };
    const navigateToSignup = () => {
        navigate('/signup');
    };
    const navigateToPartner = () => {
        navigate('/listhotel');
    };
    
    
   


    
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="../">WebBooking</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                        </ul>
                        
                        {!isLoggedIn?<ul className='navbar-nav me-2'>
                                    <li className='nav-item me-2'>
                                        <button className='btn btn-outline-primary' onClick={navigateToLogin}>Đăng nhập</button>
                                    </li>
                                    <li className='nav-item'>
                                        <button className="btn btn-primary" type="button" onClick={navigateToSignup}>Tạo tài khoản</button>
                                    </li>
                                </ul>
                                :<ul className='navbar-nav me-2'>
                                    <li className='nav-item me-2'>  
                                        <button className='btn btn-outline-primary mx-3' onClick={navigateToPartner}>Đăng ký làm đối tác</button>
                                    </li>
                                    <li className='nav-item me-2'>  
                                        <button className='btn btn-primary mx-3'
                                            onClick={()=>dispatch(actions.logout())}
                                        >Đăng xuất</button>
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
