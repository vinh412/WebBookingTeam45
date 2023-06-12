import PaymentMethod from "../../components/payment/PaymentMethod";
import InforDetail from "../../components/payment/InforDetail";
import Reviews from "../../components/evaluate/Reviews";

const reviews = [
    {name: "Phuong từ Việt Nam", point: "9,3	Trên cả tuyệt vời", desc: "Khách sạn nằm ở vị trí đẹp, thuận tiện cho việc đi lại. Nhân viên phục vụ nhiệt tình và chu đáo. Phòng tôi ở nằm trên tầng 12 có view rất đẹp, có thể nhìn toàn cảnh thành phố từ hai hướng. Thẻ (khóa) vào phòng đôi khi gặp vấn đề trục trặc, phải nhờ sự trợ giúp của nhân viên. Hành lang bộ mỗi tầng nên có số điện thoại với lễ tân khách sạn (vì không phải lúc nào khách cũng có sẵn số điện thoại của khách sạn)." },
    {name: "Phuong từ Việt Nam", point: "9,3	Trên cả tuyệt vời", desc: "Khách sạn nằm ở vị trí đẹp, thuận tiện cho việc đi lại. Nhân viên phục vụ nhiệt tình và chu đáo. Phòng tôi ở nằm trên tầng 12 có view rất đẹp, có thể nhìn toàn cảnh thành phố từ hai hướng. Thẻ (khóa) vào phòng đôi khi gặp vấn đề trục trặc, phải nhờ sự trợ giúp của nhân viên. Hành lang bộ mỗi tầng nên có số điện thoại với lễ tân khách sạn (vì không phải lúc nào khách cũng có sẵn số điện thoại của khách sạn)." },
    {name: "Phuong từ Việt Nam", point: "9,3	Trên cả tuyệt vời", desc: "Khách sạn nằm ở vị trí đẹp, thuận tiện cho việc đi lại. Nhân viên phục vụ nhiệt tình và chu đáo. Phòng tôi ở nằm trên tầng 12 có view rất đẹp, có thể nhìn toàn cảnh thành phố từ hai hướng. Thẻ (khóa) vào phòng đôi khi gặp vấn đề trục trặc, phải nhờ sự trợ giúp của nhân viên. Hành lang bộ mỗi tầng nên có số điện thoại với lễ tân khách sạn (vì không phải lúc nào khách cũng có sẵn số điện thoại của khách sạn)." },
    {name: "Phuong từ Việt Nam", point: "9,3	Trên cả tuyệt vời", desc: "Khách sạn nằm ở vị trí đẹp, thuận tiện cho việc đi lại. Nhân viên phục vụ nhiệt tình và chu đáo. Phòng tôi ở nằm trên tầng 12 có view rất đẹp, có thể nhìn toàn cảnh thành phố từ hai hướng. Thẻ (khóa) vào phòng đôi khi gặp vấn đề trục trặc, phải nhờ sự trợ giúp của nhân viên. Hành lang bộ mỗi tầng nên có số điện thoại với lễ tân khách sạn (vì không phải lúc nào khách cũng có sẵn số điện thoại của khách sạn)." }
]

const PayMent = () =>{
    return (
        <div>
            <PaymentMethod/>
            <InforDetail/>
            <Reviews reviews={reviews}/>
        </div>
    )
}

export default PayMent;