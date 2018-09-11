import React,{ Component } from 'react'
import {connect} from 'react-redux';
import { removeItem, addItem } from '../../reducers/actionCreator';  
import PropTypes from 'prop-types';

class Button extends Component {

  render() {
    const {catlog,id} = this.props;
    return (
      <div className='button'>
        <button className={catlog === 'mylist' ? 'button1' : 'button2'}
          onClick={ () => this.props.handleItem(catlog,id) }
        >
          {catlog === 'mylist' ? 'Remove' : 'Add'}
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleItem: (catlog,id) => {
      if(catlog === 'mylist'){
        dispatch(removeItem(id))
      } else {
        dispatch(addItem(id))
      }
    }
  }
}

Button.propTypes = {
  catlog:PropTypes.string.isRequired,
  id:PropTypes.number.isRequired,
  handleItem:PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps )(Button);
