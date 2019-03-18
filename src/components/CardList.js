import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component{
 

    render(){
        return (
            <div>
                {
                    this.props.users.map((user, index) => {
                        return (
                            <Card
                                key={index}
                                id={user.login['uuid']}
                                img={user.picture['large']}
                                name={`${user.name['first']} ${user.name['last']}`}
                                gender={user.gender}
                                email={user.email}
                                // TODO: You could have bound the function only once in the creation of the instance, instead of each time when doing render.
                                click={this.props.clicked.bind(this, index)} 
                                
                                change={(event) => this.props.changed(event, user.login['uuid'])} />
                        );
                    })
                }
            </div>
        );
    }
}

export default CardList;