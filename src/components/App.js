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
            InfoWindowWidth: (window.innerWidth - 20 - 15) / 2,
        }

        this.appStyles = {
            parent: {
                padding: '10px',
                    display: 'grid',
                    height: '100vh',
                    width: '100vw'
            },
        }
    }

    getUsersListWidth(){
        return (window.innerWidth - 20 - 15) - this.state.InfoWindowWidth;
    }

    updateCurrentUser = user => {
        this.state.currentUser = user;
        this.setState(this.state);
    }

    updateInfoWindowWidth = width => {
        console.log(width);
        this.state.InfoWindowWidth = width;
        this.setState(this.state);
    }

    render() {
        return(
            <div style={
                Object.assign({gridTemplateColumns: this.state.InfoWindowWidth + 'px 15px ' + this.getUsersListWidth() + 'px'}, this.appStyles.parent)
            }>
                <Info currentUser = {this.state.currentUser} />
                <Resizer updateInfoWindowWidth = {this.updateInfoWindowWidth}/>
                <UsersList currentUser = {this.state.currentUser} updateCurrentUser = {this.updateCurrentUser}/>
            </div>
        );
    }
}

export default App;