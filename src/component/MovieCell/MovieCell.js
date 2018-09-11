import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class MovieCell extends Component {



  render() {
    const { title, imgUrl }  = this.props;
    return (
      <div>
        <div className='cell' data-test="cell">
            <img 
                data-test="img"
                className="img" 
                alt="moviePost"
                src={imgUrl}   
            />
        </div>
        <p data-test='description' className="description">{title}</p> 
      </div>
    )
  }
}

MovieCell.propTypes = {
    title:PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    catlog:PropTypes.string.isRequired,
    id:PropTypes.number.isRequired
}