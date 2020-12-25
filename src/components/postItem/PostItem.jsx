import React from "react";
import "./post-list-item.css";

class PostItem extends React.Component {

  state = {
    important: this.props.important,
    like: false
  }

  handlerImportant = () => { 
    this.setState((prevState) => { 
      return {
        important: !prevState.important
      }
    })
  }
  
  handlerLike = () => { 
    this.setState(({ like }) => { 
      return {
        like: !like
      }
    })
  }

  render() {
    const { label, deleteTodoHandler } = this.props;
    const { important, like } = this.state

    let classes = "d-flex justify-content-between app-list-item";

    if (important) {
      classes += " important";
    }
    
    if (like) {
      classes += " like";
    }
    return (
      <div className={classes}>
        <span className="app-list-item-label"
          onClick={this.handlerLike }
        >{label}</span>
        <div className="d-flex justify-content-center align-items-center">
          <button type="button"
            onClick={ this.handlerImportant}
            className="btn-star btn-sm">
            <i className="fa fa-star"></i>
          </button>
          <button type="button" className="btn-trash btn-sm"
            onClick={ deleteTodoHandler }>
            <i className="fa fa-trash-o"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </div>
    );
  }
}

export default PostItem;
