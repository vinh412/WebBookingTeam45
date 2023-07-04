import { useState } from "react";
import DatePicker from "./DatePicker";
import { format } from "date-fns";

const SearchField = () => {
  const [address, setAddress] = useState("");
  const [date, setDate] = useState({
    startDate: format(new Date(), "yyyy-MM-dd"),
    endDate: format(new Date(), "yyyy-MM-dd"),
  });
  const handleSubmit = () => {
    window.location.href = `http://localhost:3000/search?searchterm=${address.replaceAll(
      " ",
      "+"
    )}&startDate=${date.startDate}&endDate=${date.endDate}`;
  };
  return (
    <div className="container bg-primary-subtle p-5 mt-5 rounded-4">
      <div className="row">
        <div className="col-md-12">
          <input
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            className="form-control py-3 my-2 rounded-3 align-content-center"
            placeholder="Nhập điểm du lịch hoặc tên khách sạn"
          />
        </div>
        <div className="col-md-12">
          <DatePicker setDate={setDate}/>
        </div>
        <button
          onClick={handleSubmit}
          className="btn btn-primary w-50 py-3 my-2 mx-auto"
        >
          Tìm
        </button>
      </div>
    </div>
  );
};

export default SearchField;
