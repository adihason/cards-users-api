import React, { Component } from 'react';

class Delete extends Component {

    render(){
        return(
            <div>
                <button 
                 className='br-pill shadow-3 bg-dark-red white pa2 ba'
                 onClick={this.props.click}>Delete</button>
            </div>
        );
    }
}

export default Delete;