import React, { Component } from 'react';
import MovieCell from '../MovieCell/MovieCell';
import Button from '../Button/Button';


export default class Cell extends Component {

    state = {
        showButton: false
    }

    onOverImg = () => {
        this.setState({showButton:true})
    }

    onLeaveImg = () => {
        console.log('haha');
        this.setState({showButton:false})
    }

    render() {

        const {title, imgUrl, catlog, id}  = this.props;

        return (
            <div 
                className="container" 
                >
                <div style={{ width:"180px"}}
                    onMouseOver={this.onOverImg}
                    onMouseLeave={this.onLeaveImg}
                >
                    <MovieCell 
                    title={title} 
                    imgUrl={imgUrl} 
                    id={id} 
                    catlog={catlog}
                    onEnterImg={this.onEnterImg}
                    onLeaveImg={this.onLeaveImg} 
                    />

                    {this.state.showButton ? 
                    <Button  
                        id={id} 
                        catlog={catlog} 
                    /> 
                    : null } 
                </div>
                <p className="description">{title}</p> 
            </div>
        )
    }
}
