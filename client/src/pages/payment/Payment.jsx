import PaymentMethod from "../../components/payment/PaymentMethod";
import InforDetail from "../../components/payment/InforDetail";
import NavBar from '../../components/navbar/NavBar'
import { useSearchParams } from "react-router-dom";
const crypto = require('crypto-js');


const PayMent = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const decrypted = crypto.AES.decrypt(searchParams.get('inf'), 'uencnbkwsnb').toString(crypto.enc.Utf8);
    const inf = JSON.parse(decrypted);
    let date1 = new Date(inf.startDate);
    let date2 = new Date(inf.endDate);
    let days = Math.ceil(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
    inf.room.cost *= days;
    inf.room.salePrice *= days;
    return (
        <div>
            <NavBar />
            <PaymentMethod />
            <InforDetail inf={inf} />
        </div>
    )
}

export default PayMent;