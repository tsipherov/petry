import React from "react";
import "./post-list-item.css";

class PostItem extends React.Component {
  render() {
    const { important, label } = this.props;

    let classes = "d-flex justify-content-between app-list-item";

    if (important) {
      classes += " important";
    }

    return (
      <div className={classes}>
        <span className="app-list-item-label">{label}</span>
        <div className="d-flex justify-content-center align-items-center">
          <button type="button" className="btn-star btn-sm">
            <i className="fa fa-star"></i>
          </button>
          <button type="button" className="btn-trash btn-sm">
            <i className="fa fa-trash-o"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </div>
    );
  }
}

export default PostItem;
