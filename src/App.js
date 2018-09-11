import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Cell from './component/Cell/Cell';
import PropTypes from 'prop-types';
import {INITIALIZE_DATA} from './reducers/actionType';
import axios from 'axios';


class App extends Component {

  componentDidMount(){
    // get data from localhost, port = 3001
    axios.get('http://localhost:3001/data')
    .then(res => this.props.initializeData(res.data))
    .catch(err => console.log(err));
  }

  render() {

    return (
      <div data-test='App' className="App">

        <div data-test='logo'>
          <img style={{width:'200px',marginLeft:'4%'}} alt='logo' src='https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70'/>
        </div>
        {this.props.lists.length === 0 && this.props.recommendations.length === 0 ? 
        <h2 data-test='no-movie' >No Movies</h2> : null
        }

        {this.props.lists.length !== 0 ? <h2>My List</h2> : null}

        <div className="row">
          {this.props.lists.map(list => (
              <Cell catlog='mylist' id={list.id} key={list.id} imgUrl={list.img} title={list.title} />
          ))}        
        </div>

        {this.props.recommendations.length !== 0 ? <h2>Recommendations</h2> : null}

        <div className="row">
          {this.props.recommendations.map(list => (
              <Cell data-test='cell' catlog='recom' id={list.id} key={list.id} imgUrl={list.img} title={list.title} />
          ))}        
        </div>
        
        {this.props.lists.length !== 0 ? 
            <h2 className='watchlist'>You are now watching: {this.props.lists.map(list =>list.title).join(', ')}</h2>
          : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lists: state.mylist,
    recommendations: state.recommendations
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initializeData: (res) => dispatch({type:INITIALIZE_DATA,mylist: res.mylist, recommendations:res.recommendations})
  }
}

App.propTypes = {
  lists:PropTypes.array.isRequired,
  recommendations:PropTypes.array.isRequired
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
