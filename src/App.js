import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import {connect} from 'react-redux';
import * as actions from './actions/searchActions'


class App extends Component {
  
  constructor(props) {
    super(props);
}

componentWillMount () {
  this.props.fetchUsers();
}

  render() {
    return (
      <div>
      <SearchBar data = {this.props.users}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(actions.fetchUsers)
});

const mapStateToProps = (state) => {
  return {
  users: state.searchReducer.users,
  }
 };

export default connect(mapStateToProps, mapDispatchToProps)(App);
