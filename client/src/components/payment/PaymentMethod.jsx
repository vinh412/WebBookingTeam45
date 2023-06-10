// import { useState } from "react";
import "./paymentMethod.css"

const PaymentMethod = () =>{
    // const [checked, setChecked] = useState();
    let time = '20 Tháng 6, 2023';
    return (
        <div className="card-1">
            <h1 style={{padding:10}}>Chọn cách thanh toán</h1>
            <section className="radio-section">
                <div className="radio-list">
                    <div className="radio-item">
                        <input type="radio" name="radio" id="radio1"/>
                    
                        <label for="radio1" className="radio-text">Thanh toán sau</label>
                        <div id="des-1">
                            <span id="text1">KHÔNG SỢ RỦI RO!!! </span>
                            <span>Đặt phòng hôm nay thanh toán vào ngày {time}</span>
                            <p>Hủy không tốn phí trước 23:59 ngày 15 Tháng 6, 2023 (giờ địa phương)</p>
                        </div>
                    </div>
                    <div className="radio-item">
                        <input type="radio" name="radio" id="radio2"/>
                        <label for="radio2" className="radio-text">
                            Thanh toán ngay
                        </label>
                        <p style={{marginLeft:50}}>Bạn cũng có thể chọn Thanh toán ngay bằng thẻ tín dụng hoặc phương thức thanh toán khác bên dưới.</p>
                        <div id="image-item">
                            <img src="https://cdn6.agoda.net/images/mvc/default/ic_card_unionpay.png"></img>
                            <img src="https://cdn6.agoda.net/images/mvc/default/ic_momo_mobile_money_2.png"></img>
                            <img src="https://cdn6.agoda.net/images/mvc/default/ic_paypal_3.png"></img>
                            <img src="https://cdn6.agoda.net/images/mvc/default/ic_atmcard.png"></img>
                        </div>
                    </div>

                </div>
            </section>
        </div>
        )
}

export default PaymentMethod;