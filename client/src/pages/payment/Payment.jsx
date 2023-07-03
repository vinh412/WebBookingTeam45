import PaymentMethod from "../../components/payment/PaymentMethod";
import InforDetail from "../../components/payment/InforDetail";
import NavBar from "../../components/navbar/NavBar";
import Sidebar from "../../components/payment/Sidebar";
import "./payment.css";

const PayMent = () => {
  return (
    <div className="payment-page">
      <NavBar />
      <div className="payment-page-content">
        <div>
          <PaymentMethod />
          <InforDetail />
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default PayMent;
