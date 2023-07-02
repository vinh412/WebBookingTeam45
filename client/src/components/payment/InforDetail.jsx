import React, {useState} from "react"
import axios from 'axios';
import isEmpty from 'validator/lib/isEmpty';
import "./inforDetail.css"

const InforDetail = () => {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [validationMsg, setValidationMsg] = useState('')


    const onChangeFullname = (e) => { 
        const value = e.target.value
        setFullname(value)
    }
    const onChangeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
    }

    const validateAll = () => {
        const msg = {}
        if(isEmpty(email)){
            msg.email = "Vui lòng nhập địa chỉ email hợp lệ để chúng tôi có thể gửi xác nhận đặt phòng cho bạn."
        }
        if(isEmpty(fullname)){
            msg.fullname = "Vui lòng nhập tên"
        }
        setValidationMsg(msg)
        if (Object.keys(msg).length > 0) return false
        return true
    }



    const onSubmit = (event) => {
        event.preventDefault();

        const isValid = validateAll()
        if (!isValid) return

        const form = {
            name: fullname,
            time: '12/08/2023 - 15/08/2023',
            place: 'DaLat Hotel'
        }

        axios.post('http://localhost:5000/api/v1/payment/sendemail', {
            email: email,
            form: form,
            })
            .then((response) => {
                console.log('Confirmation email sent');
                // Xử lý sau khi gửi email thành công
            })
            .catch((error) => {
                console.error('Error sending confirmation email:', error);
                // Xử lý lỗi
            });
        }

    return (
        <div className="container1">
            <section>
                <header>Vui lòng điền thông tin của bạn</header>
                <form action="#" className="form">
                    <div className="input-box">
                        <label>Họ tên như trong hộ chiếu</label>
                        <input 
                            type="text"     
                            placeholder=""
                            name="fullname" 
                            onChange={onChangeFullname} />
                        <p className="form-validate">{validationMsg.fullname}</p>
                    </div>
                    <div className="input-box">
                        <label>Email</label>
                        <input 
                            type="email" 
                            placeholder="Kiểm tra kỹ lỗi chính tả" 
                            name="email"
                            onChange={onChangeEmail} />
                        <p className="form-validate">{validationMsg.email}</p>
                    </div>
                    <div className="input-box" required >
                        <label>Số điện thoại </label>
                        <input type="tel" />
                    </div>
                    <div className="input-box">
                        <label>Quốc gia cư trú</label>
                        <div className="column">
                            <div className="select-box">
                            <select>
                                <option hidden>Country</option>
                                <option>America</option>
                                <option>Japan</option>
                                <option>India</option>
                                <option>VietNam</option>
                                <option>ThaiLand</option>
                                <option>Singapore</option>
                                <option>Malaysia</option>
                                <option>China</option>
                            </select>
                            </div>
                        </div>
                    </div>
                    <div id="text-1">
                        <span>
                            Thực hiện bước tiếp theo đồng nghĩa với việc bạn chấp nhận tuân theo 
                        </span>
                        <a href="/"> Điều khoản sử dụng</a>
                        <span> và</span>
                        <a href="/"> Chính sách bảo mật</a>
                        <span> của chúng tôi.</span>
                    </div>
                    <button 
                        type="submit"
                        onClick={onSubmit}
                    >Kế tiếp: Bước cuối cùng</button>
                </form>
            </section>
        </div>
    )
}

export default InforDetail