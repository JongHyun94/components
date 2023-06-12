import React, { Component } from "react";
import styles from "./index.module.scss";

/** *
 * @title -
 * @author
 * @since
 * @see     CustomTaps
 */

export default class CustomTaps extends Component {
  /*********************************************************
   *
   * 상태(state) 선언
   *
   *********************************************************/
  constructor(props) {
    super(props);
    this.state = {
      totalValues: [
        {
          label: "전체",
          value: "",
          color: "#929fbc",
        },
        {
          label: "전체",
          value: "",
          color: "#929fbc",
        },
      ],
      selectedValues: [],
    };

    // this.renderComponent = () => {};
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

  componentDidMount = async () => {};

  componentDidUpdate = (prevProps, prevState, snapshot) => {};

  /*********************************************************
   *
   * render() : Front html
   *
   *********************************************************/

  render() {
    return (
      <div className={styles.CustomTaps}>
        {this.state.totalValues.length > 0 ? (
          this.state.totalValues.map((value) => {
            return <div>하</div>;
          })
        ) : (
          <div>객체를 넣어주세요.</div>
        )}
      </div>
    );
  }
}
