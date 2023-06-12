import "./App.css";
import CustomTimePicker from "./components/CustomTimePicker";
import moment from "moment";
import { makeTimeList } from "./components/CustomTimePicker/makeTimeList";
import { useEffect, useState } from "react";
import CustomTaps from "./components/CustomTaps";

function App() {
  const tempTimeList = [
    { key: "0900", value: "09:00" },
    { key: "0930", value: "09:30" },
    { key: "1000", value: "10:00" },
    { key: "1030", value: "10:30" },
  ];
  const startTime = moment().format("YYYYMMDD");
  const endTime = moment().format("YYYYMMDD");
  // console.log("mount");
  let list = makeTimeList("0800", "1900", 10);
  // console.log("timelist", list);
  const [value, setValue] = useState("");

  // useEffect(() => {
  //   console.log("값 변경", value);
  // }, [value]);

  return (
    <div className="page">
      <p>menu</p>
      <div>
        <CustomTimePicker
          timeList={list}
          width={"200px"}
          // height={"50px"}
          value={value}
          onChange={(e) => setValue(e)}
        ></CustomTimePicker>
      </div>
      <div>
        <span>선택된 값</span>
        <span>{value}</span>
      </div>
      <div>
        <CustomTaps></CustomTaps>
      </div>
    </div>
  );
}

export default App;
