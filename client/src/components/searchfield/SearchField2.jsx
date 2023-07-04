import "./searchfield2.css";
import { faCalendarDays, faPerson, faBed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useSearchParams } from "react-router-dom";

const SearchField2 = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [openDate, setOpenDate] = useState(false);
  const [address, setAddress] = useState("");
  const [dates, setDates] = useState([
    {
      startDate: new Date(searchParams.get('startDate')),
      endDate: new Date(searchParams.get('endDate')),
      key: "selection",
    },
  ]);
  const [date, setDate] = useState({
    startDate: format(new Date(searchParams.get('startDate')), "yyyy-MM-dd"),
    endDate: format(new Date(searchParams.get('endDate')), "yyyy-MM-dd"),
  });
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 2,
    room: 1,
  });
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const handleSubmit = () => {
    window.location.href = `http://localhost:3000/search?searchterm=${address.replaceAll(
      " ",
      "+"
    )}&startDate=${date.startDate}&endDate=${date.endDate}`;
  };
  return (
    <div className="headerSearch-2">
      <div className="headerSearchItem">
        <FontAwesomeIcon icon={faBed} className="headerIcon" />
        <input
          type="text"
          placeholder="Where are you going?"
          value={searchParams.get('searchterm')}
          className="headerSearchInput"
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="headerSearchItem">
        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
        <span
          onClick={() => setOpenDate(!openDate)}
          className="headerSearchText"
        >{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(
          dates[0].endDate,
          "dd/MM/yyyy"
        )}`}</span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => {
              setDates([item.selection]);
              setDate({
                startDate: format(item.selection.startDate, "yyyy-MM-dd"),
                endDate: format(item.selection.endDate, "yyyy-MM-dd"),
              });
            }}
            moveRangeOnFirstSelection={false}
            ranges={dates}
            className="date"
            minDate={new Date()}
            months={2}
            direction="horizontal"
          />
        )}
      </div>
      <div className="headerSearchItem">
        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
        <span
          onClick={() => setOpenOptions(!openOptions)}
          className="headerSearchText"
        >{`${options.adult} người · ${options.room} phòng`}</span>
        {openOptions && (
          <div className="options">
            <div className="optionItem">
              <span className="optionText">Người</span>
              <div className="optionCounter">
                <button
                  disabled={options.adult <= 2}
                  className="optionCounterButton"
                  onClick={() => handleOption("adult", "d")}
                >
                  -
                </button>
                <span className="optionCounterNumber">{options.adult}</span>
                <button
                  className="optionCounterButton"
                  onClick={() => handleOption("adult", "i")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="optionItem">
              <span className="optionText">Phòng</span>
              <div className="optionCounter">
                <button
                  disabled={options.room <= 1}
                  className="optionCounterButton"
                  onClick={() => handleOption("room", "d")}
                >
                  -
                </button>
                <span className="optionCounterNumber">{options.room}</span>
                <button
                  className="optionCounterButton"
                  onClick={() => handleOption("room", "i")}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="headerSearchItem">
        <button className="btn btn-outline-primary" onClick={handleSubmit}>
          Cập nhật
        </button>
      </div>
    </div>
  );
};

export default SearchField2;
