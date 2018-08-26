import React, { Component } from 'react';
import filter from '../Util/filterObject';
import List from './List';

class SearchBar extends Component {

    constructor(props) {
        super(props);
       this.state  = {
           input: '',
           filteredUsers: null,
           selectedItem: 0,
           mouseItem: null,
           pointerEvent: "auto"
       }
       this.handleChange = this.handleChange.bind(this);
       this.handleHover = this.handleHover.bind(this);
       this.handleKeyDown = this.handleKeyDown.bind(this);
       this.showElement = this.showElement.bind(this);
       this.acivatePointer = this.acivatePointer.bind(this);
        }

    handleChange(e) {
        var result;
        if(e.target.value == '') {
            this.setState({input: e.target.value});
            this.setState({filteredUsers: []});
            this.setState({selectedItem: 0});

        }
        else {
        this.setState({ input: e.target.value},() => {
            if(this.props.data) {
            result = filter(this.props.data, this.state.input);
            this.setState({filteredUsers: result, selectedItem: 0}, () => {
                if(this.state.filteredUsers.length!==0) {
                this.showElement(this.state.selectedItem); 
                }
            })
            }
        });
    }
    }

    showElement(id) {
        if(id !== "") {
        document.getElementById(id).scrollIntoViewIfNeeded(false, {behavior : 'smooth'});
        }
        if(id === "0"){
            document.getElementById(id).scrollIntoViewIfNeeded(false, {behavior : 'smooth'});
        }
    }

    handleKeyDown(e) {
        if(this.state.filteredUsers){
        if(e.keyCode == '40') {
            console.log("Handle Key Down:" + e.target.id)
            if(Number(this.state.selectedItem) < this.state.filteredUsers.length-1){
                this.setState({selectedItem: Number(this.state.selectedItem)+1, pointerEvent: "none"},() =>{
                    this.showElement(this.state.selectedItem);
                    e.preventDefault();
                });
               
            }
        }
        else if(e.keyCode == '38') {
            if(Number(this.state.selectedItem) > 0){
                this.setState({selectedItem: Number(this.state.selectedItem)-1, pointerEvent: "none"}, () => {
                    this.showElement(this.state.selectedItem);
                });
                e.preventDefault();
            }
        }
        // else {
        //     this.handleHover(e);
        // }
    }
    }

    acivatePointer() {
        this.setState({pointerEvent: "auto"})
    }

    handleHover(e) {
                this.setState({mouseItem: e.target.id, selectedItem: e.target.id},() => {
                    this.showElement(this.state.selectedItem);
                    e.stopPropagation();
                });
        }

    render() {
    return (
        <div>
      <input 
        type="text"
        placeholder = "&#xF002; Search users by ID, address, name"
        id="Search"
        className="search"
        value = {this.state.input}
        onKeyDown = {this.handleKeyDown}
        onChange = {this.handleChange}
      />
      <div onMouseMove={this.acivatePointer}>
      {this.state.filteredUsers && this.state.input !="" ?(
                <div className="listBlock">
                    <List
                    pointerEvent = {this.state.pointerEvent}
                    users={this.state.filteredUsers}
                    handleKeyDown={this.handleKeyDown}
                    handleHover={this.handleHover}
                    input={this.state.input}
                    selectedItem={this.state.selectedItem}/>
                </div>
            ) : ""}
    </div>
      </div>
    );
  }
}

export default SearchBar;
