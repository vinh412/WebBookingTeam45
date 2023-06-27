import PaymentMethod from "../../components/payment/PaymentMethod";
import InforDetail from "../../components/payment/InforDetail";
import NavBar from '../../components/navbar/NavBar'



const PayMent = () =>{
    return (
        <div>
            <NavBar/>
            <PaymentMethod/>
            <InforDetail/>
        </div>
    )
}

export default PayMent;