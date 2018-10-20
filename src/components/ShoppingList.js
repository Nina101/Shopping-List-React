import React, { Component } from 'react';
import Item from './Item';

class ShoppingList extends Component{
   render () {
    var items = this.props.items.map((item, id) => {
      return (
        <Item key={id} item={item} id={id} removeItem={this.props.removeItem} markDone={this.props.markDone} />
      );
    });
    return (
      <ul className="list-group"> {items} </ul>
    );
  }
}

export default ShoppingList;
