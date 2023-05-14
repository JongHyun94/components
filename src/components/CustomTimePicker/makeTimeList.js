export const makeTimeList = (startTime = "", endTime = "", interval = 15) => {
  const defaultTime = { key: "", value: "선택해주세요." };
  let rtnTimeList = [];
  let tempStartTime = "0000";
  let tempEndTime = "2400";
  let tempInterval = 60;
  let count = 1;
  // 5, 10, 15, 20, 30, 60 분
  if (
    interval &&
    (interval === 5 ||
      interval === 10 ||
      interval === 15 ||
      interval === 20 ||
      interval === 30 ||
      interval === 60)
  ) {
    tempInterval = interval;
    count = 60 / tempInterval;
  }
  if (startTime.length === 4 && endTime.length === 4) {
    if (startTime <= endTime) {
      tempStartTime = startTime;
      tempEndTime = endTime;
    } else {
      tempStartTime = endTime;
      tempEndTime = startTime;
    }

    tempStartTime = parseInt(tempStartTime);
    tempEndTime = parseInt(tempEndTime);

    let i,
      j = 0;
    let item;
    for (i = tempStartTime; i < tempEndTime; i += 100) {
      for (j = 0; j < count; j++) {
        if (i < 1000) {
          item = {
            key: "0" + String(i),
            value:
              "0" + String(i).substring(0, 1) + ":" + String(i).substring(1, 3),
          };
          rtnTimeList.push(item);
        } else {
          item = {
            key: String(i),
            value: String(i).substring(0, 2) + ":" + String(i).substring(2, 4),
          };
          rtnTimeList.push(item);
        }
        i = i + tempInterval;
      }
      if (j === count) {
        i = i - 60;
      }
    }

    rtnTimeList.unshift(defaultTime);
  }

  return rtnTimeList;
};
