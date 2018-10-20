import React, { Component } from 'react';

class Item extends Component{
    constructor(props){
      super(props);
      this.onClickClose = this.onClickClose.bind(this);
      this.onClickDone = this.onClickDone.bind(this);
    }
    onClickClose() {
      var id = parseInt(this.props.id);
      this.props.removeItem(id);
    }
    onClickDone() {
      console.log("Clicked Done")
      var id = parseInt(this.props.id);
      this.props.markDone(id);
    }
    render(){
      var checkedClass = this.props.item.done ? "done" : "undone";
      return(
        <li className="list-group-item ">
          <div className={checkedClass}>
            <span className="glyphicon glyphicon-ok icon" aria-hidden="true" onClick={this.onClickDone}></span>
            {this.props.item.name}
            <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
          </div>
        </li>
      );
    } 
}

export default Item;