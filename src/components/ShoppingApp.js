import React, { Component } from 'react';
import Header from './Header';
import ShoppingList from './ShoppingList';
import InputItem from './InputItem';

class ShoppingApp extends Component{
    constructor (props) {
      super(props);
      this.addItem = this.addItem.bind(this);
      this.removeItem = this.removeItem.bind(this);
      this.markDone = this.markDone.bind(this);
      this.state = {shoppinglist: []};
    }
    addItem(item) {
        let list = this.state.shoppinglist;
        list.unshift({
            id: list.length+1, 
            name: item.newItemValue, 
            done: false
        });
        this.setState({shoppinglist: list});
    }
    removeItem (id) {
        let list = this.state.shoppinglist;
        list.splice(id, 1);
        this.setState({shoppinglist: list});
    }
    markDone(id) {
        let list = this.state.shoppinglist;
        var item = list[id];
        console.log(id);
        list.splice(id, 1);
        item.done = !item.done;
        console.log(item);
        item.done ? list.push(item) : list.unshift(item);
        this.setState({shoppinglist: list});  
    }
    render() {
        return (
            <div id="main">
            <Header />
            <ShoppingList items={this.state.shoppinglist} removeItem={this.removeItem} markDone={this.markDone}/>
            <InputItem addItem={this.addItem} />
            </div>
        );
    }
}

export default ShoppingApp;
  