import "./App.css";
import CustomTimePicker from "./components/CustomTimePicker";
import moment from "moment";
import { makeTimeList } from "./components/CustomTimePicker/makeTimeList";

function App() {
  const tempTimeList = [
    { key: "0900", value: "09:00" },
    { key: "0930", value: "09:30" },
    { key: "1000", value: "10:00" },
    { key: "1030", value: "10:30" },
  ];
  const startTime = moment().format("YYYYMMDD");
  const endTime = moment().format("YYYYMMDD");
  console.log("mount");
  let list = makeTimeList("0800", "1900", 10);
  console.log("timelist", list);
  return (
    <div className="page">
      <p>menu</p>
      <div>
        <CustomTimePicker
          timeList={list}
          width={"200px"}
          // height={"50px"}
        ></CustomTimePicker>
      </div>
    </div>
  );
}

export default App;
