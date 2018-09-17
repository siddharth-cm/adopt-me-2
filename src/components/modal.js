import { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

class Modal extends Component {
  el = document.createElement("div");

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }
  componentWillUnMount() {
    modalRoot.removeChild(this.el);
  }
  render() {
    return createPortal(this.props.children, this.el);
  }
}

export default Modal;
