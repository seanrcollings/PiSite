import React, { Component } from "react";
import AnimateHeight from "react-animate-height";

import history from "../history";

export default class LinkBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
      linkStateClass: ""
    };
  }

  toggleLink() {
    if (this.state.linkStateClass === "") {
      this.setState({ linkStateClass: "link-box__link-show" });
    } else {
      this.setState({ linkStateClass: "" });
    }
  }

  toggleHeight() {
    if (this.state.height === 0) {
      this.setState({ height: "auto" });
    } else {
      this.setState({ height: 0 });
    }
  }

  handlePush() {
    history.push(this.props.path);
  }

  render() {
    return (
      <div className="link-box-wrapper">
        <div
          className={`link-box ${this.props.className}`}
          onMouseEnter={() => this.toggleLink()}
          onMouseLeave={() => this.toggleLink()}
        >
          <h2 className="link-box__title">{this.props.title}</h2>

          <div
            onClick={() => this.toggleHeight()}
            className={`link-box__icon ${
              this.state.height === "auto" ? "arrow-up" : ""
            }`}
          >
            <i className="fas fa-caret-down"></i>
          </div>

          <p className="link-box__subtitle">{this.props.subTitle}</p>
          <a
            href={this.props.link}
            onClick={() => this.handlePush()}
            className={`link-box__link ${this.state.linkStateClass}`}
          >
            {this.props.linkName} <i className="fas fa-caret-right"></i>
          </a>

          <AnimateHeight
            duration={300}
            height={this.state.height}
            className="link-box__description"
          >
            <div>
              <p>{this.props.text}</p>
            </div>
          </AnimateHeight>
        </div>
      </div>
    );
  }
}
