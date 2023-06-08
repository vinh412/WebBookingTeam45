import React from "react"
import logo from "../../assets/logo.png"
// import {Button} from '../../components'
import button1 from "./Button1"

 const Header = () => {
    return (
        <div className="w-screen h-[60px] flex items-center jstify-between  bg-secomdary1">
            <img src={logo} 
                 alt="logo"
                 className="w-[160px] h-[60px] ml-[75px]"
            />

            <div>
                <button1 text={'Đăng nhập'}  />
                <button>hhhhh</button>
               
            </div>
       
        </div>
    )
 }
 export default Header