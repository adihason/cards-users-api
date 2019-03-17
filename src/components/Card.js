import React, { Component } from 'react';
import './Card.css'
import Delete from './Delete';
import 'tachyons';

class Card extends Component{

    render(){
        return (
            <div className='tc bg-light-pink dark-pink dib br3 pa3 ma2 bw2 shadow-5 ba b--black'>
                <img className='br-100 ba b--black' alt='' src={`${this.props.img}`}/>
                <div>
                    <h2>Name: {this.props.name}</h2>
                    <p>Gender: {this.props.gender}</p>
                    <p>Email: {this.props.email}</p>
                    <input className='tc ma1'
                     placeholder='Edit Email'
                     onChange={this.props.change}/>
                    <Delete click={this.props.click}/>
                </div>
            </div>
        );
    }
}
export default Card;