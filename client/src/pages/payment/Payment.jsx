import PaymentMethod from "../../components/payment/PaymentMethod";
import InforDetail from "../../components/payment/InforDetail";
import NavBar from "../../components/navbar/NavBar";
import { useSearchParams } from "react-router-dom";
import Sidebar from "../../components/payment/Sidebar";
import "./payment.css";
const crypto = require("crypto-js");

const PayMent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const decrypted = crypto.AES.decrypt(
    searchParams.get("inf"),
    "uencnbkwsnb"
  ).toString(crypto.enc.Utf8);
  const inf = JSON.parse(decrypted);
  let date1 = new Date(inf.startDate);
  let date2 = new Date(inf.endDate);
  let days = Math.ceil(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  if(days === 0) days = 1;
  inf.days = days;
  inf.room.cost *= days;
  inf.room.salePrice *= days;
  return (
    <div className="payment-page">
      <NavBar />
      <div className="payment-page-content">
        <div>
          <PaymentMethod />
          <InforDetail inf = {inf} />
        </div>
        <Sidebar bookingInfor={inf}/>
      </div>
    </div>
  );
};

export default PayMent;
