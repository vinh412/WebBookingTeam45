import "./inforDetail.css"

const InforDetail = () => {
    return (
        <div className="body1">
            <section className="container1">
                <header>Vui lòng điền thông tin của bạn</header>
                <form action="#" className="form">
                    <div className="input-box">
                        <label>Họ tên như trong hộ chiếu</label>
                        <input type="text" placeholder="" required />
                    </div>
                    <div className="input-box">
                        <label>Email</label>
                        <input type="text" placeholder="Kiểm tra kỹ lỗi chính tả" required />
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
                    <button>Kế tiếp: Bước cuối cùng</button>
                </form>
    </section>
        </div>
    )
}

export default InforDetail