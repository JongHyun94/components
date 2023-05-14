import React, { Component } from "react";
import styles from "./index.module.scss";

/** *
 * @title -
 * @author
 * @since
 * @see     CustomSelectField
 */

export default class CustomSelectField extends Component {
  /*********************************************************
   *
   * 상태(state) 선언
   *
   *********************************************************/
  constructor(props) {
    super(props);
    this.state = {
      searchedValue: "",
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
      <div className={styles.CustomSelectField} key={this.props.key}>
        <span>{this.props.value}</span>
      </div>
    );
  }
}
