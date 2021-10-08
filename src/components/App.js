import React, {Component} from 'react'
import Info from "./Info";
import UsersList from "./UsersList";
import Resizer from "./Resizer";

const clone = (x) => {
    return JSON.parse(JSON.stringify(x));
}

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {},
        }
    }

    appStyles = {
        parent: {
            padding: '10px',
            display: 'grid',
            gridTemplateColumns: '1fr 15px 1fr',
            height: '100vh',
            width: '100vw'
        },
    }

    updateCurrentUser = user => {
        this.state.currentUser = clone(user);
        this.setState(this.state);
        console.log()
    }

    render() {
        return(
            <div style={this.appStyles.parent}>
                <Info currentUser = {this.state.currentUser} />
                <Resizer />
                <UsersList currentUser = {this.state.currentUser} updateCurrentUser = {this.updateCurrentUser}/>
            </div>
        );
    }
}

export default App;