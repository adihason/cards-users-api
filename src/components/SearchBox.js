import React from 'react';

const searchBox = (props) => {
    return (
        <div className='pa2'>
            <input className='pa3 ba b--light-pink bg-washed-red'
            type="search"
            placeholder='Search User'
            onChange={props.change}
            />
        </div>
    );
}

export default searchBox;