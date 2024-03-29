import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({
            searchField: event.target.value
        });
    }

    deleteUserHendler = (userIndex) => {
        //TODO: This is very ineffecient. Try to manage the user list in a way that does not require you to rebuild the entire array every time. Something like {user_id: userInstance}. find another value in the state that should trigger the update flow
        const users = [...this.state.users];
        users.splice(userIndex, 1);
        this.setState({ users: users });
        
    }

    emailChangeHandler = (event, id) => {
        const userIndex = this.state.users.findIndex(user => {
          return user.login['uuid'] === id
        });
    
        const user = {
          ...this.state.users[userIndex]
        };
    
        // const person = Object.assign({}, this.state.persons[personIndex]);
    
        user.email = event.target.value;
    
        // TODO: Same here. 
        const users = [...this.state.users];
        users[userIndex] = user;
    
        this.setState({ users: users });
      }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=50')
            .then(res => res.json())
            .then(users => this.setState({ users: users.results }));
            //TODO: What about error handling?
    }

    render() {
        const {users, searchField} = this.state;
        const userFilter = users.filter(user => {
            return (user.name['first'].toLowerCase().includes(searchField.toLowerCase()) || user.name['last'].toLowerCase().includes(searchField.toLowerCase()));
        });

        return (
            <div className='tc'>
                <h1>Random Users Client</h1>
                <SearchBox change={this.onSearchChange} />
                <Scroll>
                    <CardList 
                     users={userFilter} 
                     clicked={this.deleteUserHendler} 
                     changed={this.emailChangeHandler}/>
                </Scroll>
            </div>
        );
    }
}

export default App;