import React, { Component } from "react";
import CustomSelectField from "../CustomSelectField";
import styles from "./index.module.scss";
import ImgBtnUp from "./imgs/ic_arrow_up_01_s_Up.png";
import ImgBtnOver from "./imgs/ic_arrow_up_01_s_over.png";
import { makeTimeList } from "./makeTimeList";

/** *
 * @title -
 * @author
 * @since
 * @see     CustomTimePicker
 */

export default class CustomTimePicker extends Component {
  /*********************************************************
   *
   * 상태(state) 선언
   *
   *********************************************************/
  constructor(props) {
    super(props);
    this.state = {
      clickState: false, // 버튼 클릭 상태
      repeat: null, // 클릭이벤트시 반복 감지
      timeList: [], // 시간표
      dropDownWidth: 0,
      dropDownSelectedIndex: null, // 선택된 값의 index
      searchedValue: "",
      startTime: "",
      endTime: "",
    };
  }

  /*********************************************************
   *
   * 함수(Function) 선언
   *
   *********************************************************/

  /*********************************************************
   *
   * Hook
   *
   *********************************************************/

  componentDidMount = () => {
    console.log("mount");
    let list = makeTimeList("0800", "1900", 10);
    console.log("timelist", list);
  };

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    if (prevState.clickState !== this.state.clickState) {
      if (this.state.clickState) {
        clearTimeout(this.state.repeat);
        this.setState({ ...this.state, repeat: null }, () => {
          this.setState({ ...this.state, clickState: true });
        });
      } else {
        this.setState({
          ...this.state,
          repeat: setTimeout(() =>
            this.setState({ ...this.state, clickState: false })
          ),
        });
      }
    }
  };

  /*********************************************************
   *
   * render() : Front html
   *
   *********************************************************/

  render() {
    return (
      <div
        className={styles.CustomTimePicker}
        style={{ width: this.props.width, height: this.props.height }}
      >
        <div
          className={styles.headField}
          style={{ width: this.props.width, height: this.props.height }}
        >
          {/* input */}
          <span className={styles.textField}></span>
          {/* button */}
          <img
            className={
              this.state.clickState === true ? styles.over : styles.normal
            }
            src={this.state.clickState ? ImgBtnOver : ImgBtnUp}
            onClick={() => {
              this.setState({
                ...this.state,
                clickState: !this.state.clickState,
              });
            }}
            alt=""
          ></img>
        </div>
        {/* {this.state.clickState ? } */}
        <div
          className={
            this.state.clickState === true
              ? styles.slideFadeInDropdown
              : styles.slideFadeOutDropdown
          }
        >
          {this.props.timeList && this.props.timeList.length > 0 ? (
            <div
              className={styles.list}
              style={{
                height: this.props.timeList.length > 7 ? "189px" : "100%",
              }}
            >
              {this.props.timeList.map((time) => {
                return (
                  <CustomSelectField
                    key={time.key}
                    value={time.value}
                  ></CustomSelectField>
                );
              })}
            </div>
          ) : (
            <CustomSelectField key={""} value={""}></CustomSelectField>
          )}
        </div>
      </div>
    );
  }
}
