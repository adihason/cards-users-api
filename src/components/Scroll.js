import React from 'react';

const scroll = (props) => {
    return(
        <div style={{overflow: 'scroll', border: '1px black solid', height: '500px' }}>
            {props.children}
        </div>
    );
}

export default scroll;